import { Controller, Logger, Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Interaccion } from './entities/interaccion.entity';
import { Agente } from './entities/agente.entity';
import { Campania } from './entities/campania.entity';
import { Interaction } from './interaction.interface';
import { InteractionService } from './interaction.service';
@Controller('v3')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}
  logger = new Logger('InteractionController');
  @Get('interaction/normalized/:iid')
  async findOne(@Param('iid') iid: string): Promise<Interaccion> {
    this.logger.log(`findOne ${iid}`);
    return this.interactionService.findOne(iid);
  }

  @Get('interaction/full/:iid')
  async findOneFull(@Param('iid') iid: string): Promise<Interaction> {
    this.logger.log(`findOneFull ${iid}`);
    return this.interactionService.findOneFull(iid);
  }

  @Get('campaign/:id')
  async campaign(@Param('id') id: number): Promise<Campania> {
    this.logger.log(`campaign ${id}`);
    return this.interactionService.campaign(id);
  }

  @Get('agent/:id')
  async agent(@Param('id') id: number): Promise<Agente> {
    this.logger.log(`agent ${id}`);
    return this.interactionService.agent(id);
  }

  @Get('transcript_data/:iid')
  async findTranscriptData(@Param('iid') iid: string): Promise<any> {
    this.logger.log(`findTranscriptData ${iid}`);
    return this.interactionService.findTranscriptData(iid);
  }
}
