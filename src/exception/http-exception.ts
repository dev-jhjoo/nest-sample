import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundMailIdException extends HttpException {
  constructor(id: number) {
    super({ code: 100, message: `not found id=${id}` }, HttpStatus.NOT_FOUND);
  }
}

export class NotFoundMailSenderException extends HttpException {
  constructor(sender: string) {
    super(
      { code: 101, message: `not found sender=${sender}` },
      HttpStatus.NOT_FOUND,
    );
  }
}
