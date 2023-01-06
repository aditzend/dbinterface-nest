import { Controller, Get, Post, Param, Body, Logger } from '@nestjs/common';
import { ParametroTareaEntrada } from './parametro_tarea_entrada.entity';
import { ParametroTareaSalida } from './parametro_tarea_salida.entity';
import { ParameterService } from './parameter.service';
import { CreateOutgoingTaskParamDto } from './dto/create-outgoing-task-param.dto';
import { TaskIdParam } from './dto/task-id-param';
@Controller('v3/parameters')
export class ParameterController {
  constructor(private readonly parameterService: ParameterService) {}
  logger = new Logger('ParameterController');

  @Post('/outgoing')
  outgoingTaskParamsPost(
    @Body() createOutgoingTaskParamDto: CreateOutgoingTaskParamDto,
  ): Promise<any> {
    return this.parameterService.createOutgoingTaskParam(
      createOutgoingTaskParamDto,
    );
  }

  @Get('/outgoing/:tid')
  async getOutgoingTaskParamsByTaskId(@Param() tid: TaskIdParam) {
    this.logger.log(`outgoingTaskParams ${tid}`);
    return await this.parameterService.getOutgoingTaskParamsByTaskId(tid);
  }

  @Get('/incoming/:tid')
  async getIncomingTaskParamsByTaskId(@Param() tid: TaskIdParam) {
    this.logger.log(`incomingTaskParams ${tid}`);
    return this.parameterService.getIncomingTaskParamsByTaskId(tid);
  }
}
