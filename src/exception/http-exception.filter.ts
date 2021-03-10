import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const request = host.switchToHttp().getRequest<Request>();
    const response = host.switchToHttp().getResponse<Response>();
    const status = exception.getStatus();
    const result = JSON.parse(JSON.stringify(exception.getResponse()));

    console.error('[ERROR]', request.url, '|exception=', exception.message);

    response.status(status).json({
      resultCode: result.code,
      resultMessage: result.message,
    });
  }
}

@Catch(Error)
export class ErrorFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const request = host.switchToHttp().getRequest<Request>();
    const response = host.switchToHttp().getResponse<Response>();

    console.error('[ERROR]', request.url, '|exception=', exception.message);

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      resultCode: HttpStatus.INTERNAL_SERVER_ERROR,
      resultMessage: 'internal server error please contact call-center',
    });
  }
}

NotFoundException;
