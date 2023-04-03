import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Stock {
  @PrimaryGeneratedColumn({ comment: '库存ID' })
  id: number

  @Column({ comment: '商品ID' })
  productId: number

  @Column({ type: 'float', comment: '尺码' })
  size: number

  @Column({ comment: '颜色' })
  color: string

  @Column({ comment: '图片地址' })
  picture: string

  @Column({ comment: '库存数量' })
  count: number
}
