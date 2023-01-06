// Create otp dto class related to ParametroTarea Salida Entity
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateOutgoingTaskParamDto {
  @IsNotEmpty()
  @IsNumber()
  task_id: number;
  @IsNotEmpty()
  key: string;
  @IsNotEmpty()
  value: string;
}
