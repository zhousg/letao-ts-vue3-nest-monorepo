import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { LoginUserDto, RegisterUserDto, UserDto } from './user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserList() {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id)
  }

  @Post()
  create(@Body() user: RegisterUserDto) {
    return this.userService.save(user)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() user: UserDto) {
    user.id = id
    return this.userService.update(user)
  }

  @Post('/login')
  async login(@Body() user: LoginUserDto) {
    const loginUser = await this.userService.findOneByPassword(user)
    if (!loginUser)
      throw new BadRequestException('用户或密码错误')
    return loginUser
  }

  @Post('/register')
  async register(@Body() user: RegisterUserDto) {
    const registerUser = await this.userService.save(user)
    if (!registerUser)
      throw new BadRequestException('注册失败')
    return registerUser
  }
}
