import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateOutgoingTaskParamDto } from './dto/create-outgoing-task-param.dto';
import { TaskIdParam } from './dto/task-id-param';
import { ParametroTareaEntrada } from './parametro_tarea_entrada.entity';
import { ParametroTareaSalida } from './parametro_tarea_salida.entity';

@Injectable()
export class ParameterService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ParametroTareaEntrada)
    private parametroTareaEntradaRepo: Repository<ParametroTareaEntrada>,
    @InjectRepository(ParametroTareaSalida)
    private parametroTareaSalidaRepo: Repository<ParametroTareaSalida>,
  ) {}
  logger = new Logger('ParameterService');

  async createOutgoingTaskParam(
    createOutgoingTaskParamDto: CreateOutgoingTaskParamDto,
  ): Promise<any> {
    // this.logger.debug(
    //   `createOutgoingTaskParams ${JSON.stringify(
    //     outgoing_task_param,
    //   )} type ${typeof outgoing_task_param}`,
    // );
    const parametroTareaSalida = new ParametroTareaSalida();
    parametroTareaSalida.idTarea = createOutgoingTaskParamDto.task_id;
    parametroTareaSalida.NombreParametro = createOutgoingTaskParamDto.key;
    parametroTareaSalida.Valor = createOutgoingTaskParamDto.value;
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(parametroTareaSalida);
      await queryRunner.commitTransaction();
    } catch (err) {
      this.logger.error(err);
      await queryRunner.rollbackTransaction();
      return `error: ${err}`;
    } finally {
      await queryRunner.release();
      return 'ok';
    }
  }

  getIncomingTaskParamsByTaskId(
    params: TaskIdParam,
  ): Promise<ParametroTareaEntrada[]> {
    const idTarea = params.tid;
    const results = this.parametroTareaEntradaRepo
      .createQueryBuilder('ParametroTareaEntrada')
      .where('ParametroTareaEntrada.idTarea = :idTarea', { idTarea })
      .getRawMany();
    this.logger.debug(
      `getIncomingTaskParamsByTaskId ${JSON.stringify(results)}`,
    );
    return results;
  }

  async getOutgoingTaskParamsByTaskId(
    params: TaskIdParam,
  ): Promise<ParametroTareaSalida[]> {
    const idTarea = params.tid;
    const results = await this.dataSource
      .getRepository(ParametroTareaSalida)
      .createQueryBuilder('ParametroTareaSalida')
      .where('ParametroTareaSalida.idTarea = :idTarea', { idTarea })
      .getRawMany();
    this.logger.debug(
      `getOutgoingTaskParamsByTaskId ${JSON.stringify(results)}`,
    );
    return results;
  }
}
