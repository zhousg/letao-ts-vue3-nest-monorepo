import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn({ comment: '用户ID' })
  id: number

  @Column({ comment: '用户名称' })
  username: string

  @Column({ comment: '用户密码' })
  password: string

  @Column({ comment: '用户手机号' })
  mobile: string

  @Column({ default: false, comment: '是否删除' })
  isDelete: boolean
}
