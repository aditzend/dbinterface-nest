import { Injectable, Logger } from '@nestjs/common';
import { Interaccion } from './entities/interaccion.entity';
import { OrigenCorte } from './entities/origen_corte.entity';
import { Campania } from './entities/campania.entity';
import { Interaction } from './interaction.interface';
import { Segment } from './segment.interface';
import { Agente } from './entities/agente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CausaTerminacion } from './entities/causa_terminacion.entity';
import { ModoCampania } from './entities/modo_campania.entity';
import { ResultadoGestion } from './entities/resultado_gestion.entity';
import { ParametroCampania } from './entities/parametro_campania.entity';
import { Grabacion } from './entities/grabacion.entity';
import { Grupo } from './entities/grupo.entity';

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
    @InjectRepository(ParametroCampania)
    private parametroCampaniaRepo: Repository<ParametroCampania>,
    @InjectRepository(Grabacion)
    private grabacionRepo: Repository<Grabacion>,
  ) {}

  logger = new Logger('InteractionService');

  campaign(idCampania: number): Promise<Campania> {
    return this.campaniaRepo.findOneBy({ idCampania });
  }

  agent(idAgente: number): Promise<Agente> {
    return this.agenteRepo.findOneBy({ idAgente });
  }

  findOne(idInteraccion: string): Promise<Interaccion> {
    return this.interactionRepo.findOneBy({ idInteraccion });
  }

  async findTranscriptData(idInteraccion: string): Promise<any> {
    const interaccion: Interaccion = await this.interactionRepo.findOneBy({
      idInteraccion,
    });

    const campania: Campania = await this.campaniaRepo.findOneBy({
      idCampania: interaccion.idCampania,
    });

    this.logger.verbose(`Campania ${JSON.stringify(campania)}`);

    const parametrosCampania = await this.parametroCampaniaRepo.findBy({
      idCampania: campania.idCampania,
    });

    return {
      interaction_id: idInteraccion,
      parameters: parametrosCampania,
    };
  }

  async findOneFull(idInteraccion: string): Promise<Interaction> {
    this.logger.verbose(`trying to find interaction: [${idInteraccion}]`);
    const interaccion: Interaccion = await this.interactionRepo.findOneBy({
      idInteraccion,
    });
    this.logger.verbose(`findOneFull ${JSON.stringify(interaccion)}`);

    const grabaciones: Grabacion[] = await this.grabacionRepo.findBy({
      idInteraccion,
    });

    const segmentProcessor = function (grabaciones: Grabacion[]): Segment[] {
      if (grabaciones.length < 1) {
        return [
          {
            segment_id: `${idInteraccion}-s1`,
            started_at: new Date(),
            duration: 0,
          },
        ];
      } else {
        return grabaciones.map((grabacion, index) => {
          return {
            segment_id: `${idInteraccion}-s${index + 1}`,
            started_at: grabacion.Inicio,
            duration: grabacion.Duracion,
            total_duration: grabacion.Duracion,
            extension: grabacion.Extension,
            file: grabacion.FileName,
            shoot_mode: 0,
            audio_offset: 0,
            processed: 0,
            chat: '',
            video_chat_recording: '',
            auxiliar_chat_recording: '',
          };
        });
      }
    };

    const segments: Segment[] = segmentProcessor(grabaciones);

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
    this.logger.verbose(`Campania ${JSON.stringify(campania)}`);

    // const modoCampania: ModoCampania = await this.modoCampaniaRepo.findOneBy({
    //   idModoCampania: campania.ModoCampania,
    // });

    //TODO traer valor real

    const modoCampania: ModoCampania = {
      idModoCampania: 1,
      Descripcion: 'Manual',
    };

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
      interaction_id: interaccion.idInteraccion,
      started_at: interaccion.Inicio,
      segments,
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
        id: interaccion.idCampania,
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

      context: interaccion.Contexto,
      message_id: interaccion.idMensaje,
      case_id: interaccion.idCaso,
      closed_by_max_acw_time: 0,
      // closed_by_max_acw_time: interaccion.CerradaPorTiempoMaxACW,
      duration: interaccion.Duracion,
      task_id: interaccion.idTarea,
    };
  }
}
