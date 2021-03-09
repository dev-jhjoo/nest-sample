import { IsOptional } from 'class-validator';
import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'mails',
  underscored: true,
})
export class Mail extends Model<Mail> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT.UNSIGNED)
  id: number;

  @Column(DataType.STRING)
  sender: string;

  @Column(DataType.STRING)
  receiver: string;

  @IsOptional()
  @Column(DataType.STRING)
  title: string;

  @IsOptional()
  @Column(DataType.TEXT)
  contents: string;

  @CreatedAt
  createdAt: Date;

  @IsOptional()
  @UpdatedAt
  updatedAt: Date;
}
