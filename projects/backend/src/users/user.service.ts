import { LeUser } from '@letao/types'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LoginUserDto, RegisterUserDto } from './user.dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
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

  async update(leUser: LeUser): Promise<void> {
    await this.usersRepository.update({ id: leUser.id }, leUser)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
