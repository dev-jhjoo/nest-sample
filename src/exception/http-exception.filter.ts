import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus
} from '@nestjs/common';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch( exception: HttpException | Error, host: ArgumentsHost ) {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest();
    const result = this._exceptionFactory( exception );

    console.error( '[Exception]path=', request.url );
    console.error( '[Exception]response=', result );
    console.error( '[Exception]exception=', exception );

    response.status( result.status ).json({
      resultCode: result.code,
      ressultMessage: result.message,
    });
  }

  private _exceptionFactory( exception: HttpException | Error ) {
    console.log( '[Exception]isHttpException=',exception instanceof HttpException );
    return exception instanceof HttpException ? this._getHttpException( exception ):this._getErrorException( exception );
  }

  private _getHttpException( exception: HttpException ) {
    return {
      status: exception.getStatus(),
      code: ( exception.getResponse() as ExceptionResponseFormat ).code || 9999,
      message: exception.message,
    };
  }

  private _getErrorException( exception: Error ) {
    return {
      status: HttpStatus.BAD_REQUEST,
      code: 9999,
      message: exception.message.replace( /"/gi, '`' ),
    };
  }
}

export interface ExceptionResponseFormat {
  code: number;
  message: string;
}
