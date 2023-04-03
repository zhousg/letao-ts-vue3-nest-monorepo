import { randomUUID } from 'node:crypto'
import { extname } from 'node:path'
import { BadRequestException, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { User } from './users/user.entity'
import { Employee } from './employee/employee.entity'
import { Category } from './category/category.entity'
import { Product } from './product/product.entity'
import { Stock } from './stock/stock.entity'
import { Picture } from './picture/picture.entity'
import { UserModule } from './users/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'letao',
      entities: [User, Employee, Category, Product, Stock, Picture],
      synchronize: true,
    }),
    UserModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: diskStorage({
          destination: './upload',
          filename(req, file, cb) {
            const fileName = `${randomUUID()}${extname(file.originalname)}`
            return cb(null, fileName)
          },
        }),
        fileFilter(req, file, cb) {
          if (file.mimetype.startsWith('image'))
            return cb(null, true)
          cb(new BadRequestException('支持jpg、png、gif格式图片'), false)
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
