import { Module } from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { InteractionController } from './interaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interaccion } from './interaccion.entity';
import { Agente } from './agente.entity';
import { OrigenCorte } from './origen_corte.entity';
import { CausaTerminacion } from './causa_terminacion.entity';
import { Campania } from './campania.entity';
import { Grupo } from './grupo.entity';
import { ModoCampania } from './modo_campania.entity';
import { ResultadoGestion } from './resultado_gestion.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Interaccion,
      OrigenCorte,
      CausaTerminacion,
      Campania,
      ModoCampania,
      Agente,
      Grupo,
      ResultadoGestion,
    ]),
  ],
  providers: [InteractionService],
  controllers: [InteractionController],
  exports: [TypeOrmModule],
})
export class InteractionModule {}
