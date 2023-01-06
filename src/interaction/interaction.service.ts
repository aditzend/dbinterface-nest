import { Injectable } from '@nestjs/common';
import { Interaccion } from './interaccion.entity';
import { OrigenCorte } from './origen_corte.entity';
import { Campania } from './campania.entity';
import { Interaction } from './interaction.interface';
import { Agente } from './agente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CausaTerminacion } from './causa_terminacion.entity';
import { Grupo } from './grupo.entity';
import { ModoCampania } from './modo_campania.entity';
import { ResultadoGestion } from './resultado_gestion.entity';
@Injectable()
export class InteractionService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Interaccion)
    private interactionRepo: Repository<Interaccion>,
    @InjectRepository(OrigenCorte)
    private origenCorteRepo: Repository<OrigenCorte>,
    @InjectRepository(CausaTerminacion)
    private causaTerminacionRepo: Repository<CausaTerminacion>,
    @InjectRepository(Campania)
    private campaniaRepo: Repository<Campania>,
    @InjectRepository(ModoCampania)
    private modoCampaniaRepo: Repository<ModoCampania>,
    @InjectRepository(Agente)
    private agenteRepo: Repository<Agente>,
    @InjectRepository(Grupo)
    private grupoRepo: Repository<Grupo>,
    @InjectRepository(ResultadoGestion)
    private resultadoGestionRepo: Repository<ResultadoGestion>,
  ) {}

  campaign(idCampania: number): Promise<Campania> {
    return this.campaniaRepo.findOneBy({ idCampania });
  }

  agent(idAgente: number): Promise<Agente> {
    return this.agenteRepo.findOneBy({ idAgente });
  }

  findOne(idInteraccion: string): Promise<Interaccion> {
    return this.interactionRepo.findOneBy({ idInteraccion });
  }

  async findOneFull(idInteraccion: string): Promise<Interaction> {
    const interaccion: Interaccion = await this.interactionRepo.findOneBy({
      idInteraccion,
    });

    const origenCorte: OrigenCorte = await this.origenCorteRepo.findOneBy({
      idOrigenCorte: interaccion.OrigenCorte,
    });

    const causaTerminacion: CausaTerminacion =
      await this.causaTerminacionRepo.findOneBy({
        CodigoTerminacion: interaccion.CausaTerminacion,
      });

    const campania: Campania = await this.campaniaRepo.findOneBy({
      idCampania: interaccion.idCampania,
    });

    const modoCampania: ModoCampania = await this.modoCampaniaRepo.findOneBy({
      idModoCampania: campania.ModoCampania,
    });

    const agente: Agente = await this.agenteRepo.findOneBy({
      idAgente: interaccion.idAgente,
    });

    const grupo: Grupo = await this.grupoRepo.findOneBy({
      idGrupo: agente.idGrupo,
    });

    const supervisor: Agente = await this.agenteRepo.findOneBy({
      idAgente: grupo.idSupervisor,
    });

    const resultadoGestion: ResultadoGestion =
      await this.resultadoGestionRepo.findOneBy({
        idResultadoGestion: interaccion.idResultadoGestion,
      });

    return {
      id: interaccion.idInteraccion,
      started_at: interaccion.Inicio,
      crm_id: interaccion.idCRM,
      client: {
        id: interaccion.idCliente,
        name: interaccion.Cliente,
        phone_number_id: interaccion.idNumero,
      },
      dnis: interaccion.DNIS,
      ani: interaccion.ANI,
      result: {
        id: interaccion.idResultadoGestion,
        code: resultadoGestion.id,
        name: interaccion.idResultadoGestion
          ? resultadoGestion.NombreCompleto
          : '',
      },
      termination_cause: {
        id: interaccion.CausaTerminacion,
        description: causaTerminacion.Descripcion,
        default_score: causaTerminacion.PuntajeDefault,
        default_time: causaTerminacion.TiempoDefault,
      },
      q850_cause_id: interaccion.CausaQ850,
      cut_origin: {
        id: interaccion.OrigenCorte,
        description: origenCorte.Descripcion,
      },
      campaign: {
        id: campania.idCampania,
        name: campania.Nombre,
        mode: modoCampania.Descripcion,
      },
      agent: {
        id: interaccion.idAgente,
        name: agente.Nombre,
        group_id: agente.idGrupo,
        group_name: grupo.Nombre,
        supervisor_id: grupo.idSupervisor,
        supervisor_name: supervisor.Nombre,
      },

      segments: interaccion.segmentos,
      context: interaccion.Contexto,
      message_id: interaccion.idMensaje,
      case_id: interaccion.idCaso,
      closed_by_max_acw_time: interaccion.CerradaPorTiempoMaxACW,
      duration: interaccion.Duracion,
      task_id: interaccion.idTarea,
    };
  }
}
