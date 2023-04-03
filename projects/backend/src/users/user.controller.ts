import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { LeUser } from '@letao/types'
import { UserService } from './user.service'
import { LoginUserDto, RegisterUserDto } from './user.dto'

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
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.userService.remove(id)
  }

  @Post()
  create(@Body() leUser: LeUser) {
    return this.userService.save(leUser)
  }

  @Patch()
  update(@Body() leUser: LeUser) {
    return this.userService.update(leUser)
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
