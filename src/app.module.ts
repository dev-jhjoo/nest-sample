import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Configuration } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { MailsModule } from './mails/mails.module';

@Module({
  imports: [Configuration, DatabaseModule, MailsModule, HttpExceptionFilter],
  controllers: [AppController],
})
export class AppModule {}
