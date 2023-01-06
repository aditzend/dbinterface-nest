import { Module } from '@nestjs/common';
import { ParametroTareaEntrada } from './parametro_tarea_entrada.entity';
import { ParametroTareaSalida } from './parametro_tarea_salida.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterService } from './parameter.service';
import { ParameterController } from './parameter.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParametroTareaEntrada, ParametroTareaSalida]),
  ],
  providers: [ParameterService],
  controllers: [ParameterController],
  exports: [TypeOrmModule],
})
export class ParameterModule {}
