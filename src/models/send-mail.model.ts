import { IsString } from 'class-validator';
import { Mail } from './mail.model';

export class SendMailModel extends Mail {
  @IsString()
  readonly sender: string;
  @IsString()
  readonly receiver: string;
  @IsString()
  readonly title: string;
  @IsString()
  readonly contents: string;
}
