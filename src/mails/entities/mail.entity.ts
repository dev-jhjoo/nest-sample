import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'mails',
  underscored: true,
})
export class Mails extends Model<Mails> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT.UNSIGNED)
  id: number;

  @Column(DataType.STRING)
  sender: string;

  @Column(DataType.STRING)
  receiver: string;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.TEXT)
  contents: string;

  @CreatedAt
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;
}
