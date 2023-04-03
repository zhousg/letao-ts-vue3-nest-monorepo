import { ArgumentsHost, Catch, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    const status = exception.getStatus()

    response
      .status(status)
      .json({
        statusCode: status,
        message: exception.message,
        timestamp: new Date().toLocaleString(),
        path: request.url,
      })
  }
}
