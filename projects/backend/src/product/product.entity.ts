import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ comment: '商品ID' })
  id: number

  @Column({ comment: '商品名称' })
  proName: string

  @Column({ comment: '商品描述', type: 'text' })
  proDesc: string

  @Column({ type: 'float', comment: '商品原价' })
  oldPrice: number

  @Column({ type: 'float', comment: '商品现价' })
  price: number

  @Column({ default: false, comment: '商品状态' })
  status: boolean

  @Column({ default: false, comment: '是否删除' })
  isDelete: boolean
}
