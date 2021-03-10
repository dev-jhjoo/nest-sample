import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SendMailDTO } from '../mails/dto/send-mail.dto';
import { Mails } from './entities/mail.entity';

@Injectable()
export class MailsService {
  constructor(@InjectModel(Mails) private _mailModel: typeof Mails) {}

  async findAll(): Promise<Mails[]> {
    return await this._mailModel.findAll();
  }

  async findOne(id: number): Promise<Mails | void> {
    return await this._mailModel
      .findOne({ where: { id } })
      .then(this.fulfilled)
      .catch(this.errorHandler);
  }

  async create(sendMailData: SendMailDTO): Promise<Mails> {
    return await Mails.create(sendMailData);
  }

  fulfilled = (fulfilled) => {
    if (!fulfilled) {
      throw new NotFoundException();
    }
  };

  errorHandler = (error) => {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  };
}
