import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello()
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('/file')
  uploadFile(@UploadedFile() file: Express.Multer.File,
  ) {
    return { name: file.originalname, path: `assets/${file.filename}` }
  }
}
