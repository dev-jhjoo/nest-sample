import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';
import { Mails } from './entities/mail.entity';

@Module({
  imports: [SequelizeModule.forFeature([Mails])],
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule {}
