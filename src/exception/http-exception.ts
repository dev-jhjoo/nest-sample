import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundMailIdException extends HttpException {
  constructor( id: number ) {
    super({ code: 100, message: `not found id=${id}` }, HttpStatus.NOT_FOUND );
  }
}

