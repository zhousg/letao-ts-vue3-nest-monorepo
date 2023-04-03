import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ comment: '分类ID' })
  id: number

  @Column({ comment: '分类名称 ' })
  productId: number

  @Column({ default: false, comment: '是否删除' })
  isDelete: boolean
}
