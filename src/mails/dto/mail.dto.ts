import { IsString } from 'class-validator';
import { Mails } from '../entities/mail.entity';

export class SendMailDTO extends Mails {
  @IsString()
  readonly sender: string;
  @IsString()
  readonly receiver: string;
  @IsString()
  readonly title: string;
  @IsString()
  readonly contents: string;
}
