import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SendMailModel } from 'src/models/send-mail.model';
import { Mail } from '../models/mail.model';

@Injectable()
export class MailsService {
  constructor(@InjectModel(Mail) private mailModel: typeof Mail) {}

  async findAll(): Promise<Mail[]> {
    const mailList: Mail[] = await this.mailModel.findAll();
    console.log(mailList);
    return mailList;
  }

  async create(sendMailData: SendMailModel): Promise<boolean> {
    await this.mailModel.create(sendMailData);
    return true;
  }

  private getDate(): Date {
    return new Date(Date.now());
  }
}
