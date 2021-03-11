import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NotFoundMailIdException } from 'src/exception/http-exception';
import { SendMailDTO } from '../mails/dto/mail.dto';
import { Mails } from './entities/mail.entity';

@Injectable()
export class MailsService {
  constructor( @InjectModel( Mails ) private _mailModel: typeof Mails ) {}

  async findAll(): Promise<Mails[]> {
    return await this._mailModel.findAll();
  }

  async findOne( id: number ): Promise<Mails> {
    return await this._mailModel.findOne({ where: { id } }).then( ( result ) => {
      if ( !result ) {
        throw new NotFoundMailIdException( id );
      }
      return result;
    });
  }

  async findAllBySender( sender: string ): Promise<Mails[]> {
    return await this._mailModel.findAll({ where: { sender } });
  }

  async create( sendMailData: SendMailDTO ): Promise<Mails> {
    return await Mails.create( sendMailData );
  }
}
