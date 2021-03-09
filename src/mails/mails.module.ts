import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';
import { Mail } from '../models/mail.model';

@Module({
  imports: [SequelizeModule.forFeature([Mail])],
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule {}
