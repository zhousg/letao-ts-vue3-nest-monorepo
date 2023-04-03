import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn({ comment: '管理员ID' })
  id: number

  @Column({ comment: '账号' })
  username: string

  @Column({ comment: '密码' })
  password: string

  @Column({ comment: '手机号' })
  mobile: string

  @Column({ comment: '权限' })
  authority: string

  @Column({ default: false, comment: '是否删除' })
  isDelete: boolean
}
