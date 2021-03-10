import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import {
  ErrorFilter,
  HttpExceptionFilter,
} from 'src/exception/http-exception.filter';
import { SendMailDTO } from '../mails/dto/send-mail.dto';
import { MailsService } from './mails.service';

@Controller('mails')
@UseFilters(new ErrorFilter())
export class MailsController {
  constructor(private readonly service: MailsService) {}

  @Get('')
  @UseFilters(new HttpExceptionFilter())
  getOneMailBySender(@Query('sender') sender: string) {
    return this.service.findOneBySender(sender);
  }

  // @Get('')
  // getAllMails() {
  //   return this.service.findAll();
  // }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  getOneMail(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  sendMain(@Body() sendMailData: SendMailDTO) {
    return this.service.create(sendMailData);
  }
}
