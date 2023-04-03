import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Picture {
  @PrimaryGeneratedColumn({ comment: '商品图片ID' })
  id: number

  @Column({ comment: '商品ID' })
  productId: number

  @Column({ comment: '图片地址' })
  picture: string
}
