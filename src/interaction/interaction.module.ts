import { Module } from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { InteractionController } from './interaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interaccion } from './entities/interaccion.entity';
import { Agente } from './entities/agente.entity';
import { OrigenCorte } from './entities/origen_corte.entity';
import { CausaTerminacion } from './entities/causa_terminacion.entity';
import { Campania } from './entities/campania.entity';
import { Grupo } from './entities/grupo.entity';
import { ModoCampania } from './entities/modo_campania.entity';
import { ResultadoGestion } from './entities/resultado_gestion.entity';
import { ParametroCampania } from './entities/parametro_campania.entity';
import { Grabacion } from './entities/grabacion.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Interaccion,
      OrigenCorte,
      CausaTerminacion,
      Campania,
      ModoCampania,
      ParametroCampania,
      Agente,
      Grupo,
      Grabacion,
      ResultadoGestion,
    ]),
  ],
  providers: [InteractionService],
  controllers: [InteractionController],
  exports: [TypeOrmModule],
})
export class InteractionModule {}
