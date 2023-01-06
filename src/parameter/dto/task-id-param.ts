import { IsNumberString } from 'class-validator';

export class TaskIdParam {
  @IsNumberString()
  tid: number;
}
