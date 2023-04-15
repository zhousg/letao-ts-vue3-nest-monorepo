import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LoginUserDto, RegisterUserDto, UserDto } from './user.dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ where: { isDelete: false } })
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id, isDelete: false })
  }

  findOneByPassword(user: LoginUserDto): Promise<User | null> {
    return this.usersRepository.findOneBy(user)
  }

  async save(user: RegisterUserDto): Promise<User> {
    return this.usersRepository.save(user)
  }

  async update(user: UserDto): Promise<void> {
    await this.usersRepository.update({ id: user.id }, user)
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
