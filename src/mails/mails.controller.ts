import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SendMailDTO } from '../mails/dto/send-mail.dto';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
  constructor(private readonly service: MailsService) {}

  @Get()
  getAllMails() {
    return this.service.findAll();
  }

  @Get(':id')
  getOneMail(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  sendMain(@Body() sendMailData: SendMailDTO) {
    return this.service.create(sendMailData);
  }
}
