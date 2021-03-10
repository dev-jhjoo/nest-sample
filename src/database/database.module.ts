import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Mails } from '../mails/entities/mail.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MAIL_DB_HOST,
      port: parseInt(process.env.MAIL_DB_PORT),
      username: process.env.MAIL_DB_USERNAME,
      password: process.env.MAIL_DB_PASSWORD,
      database: process.env.MAIL_DB_DATABASE,
      models: [Mails],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
