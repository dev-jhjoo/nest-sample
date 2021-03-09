import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendMailModel } from 'src/models/send-mail.model';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
  constructor(private readonly service: MailsService) {}

  @Get()
  async getAllMails() {
    return { mail_list: await this.service.findAll() };
  }

  @Post()
  sendMain(@Body() sendMailData: SendMailModel) {
    return this.service.create(sendMailData);
  }
}
