import { Controller, Get, Logger, Post, Param, Body } from '@nestjs/common';
import { TranscriptService } from './transcript.service';
import { Transcript } from './transcript.entity';
import { CreateTranscriptDto } from './dto/create-transcript.dto';
@Controller('v3/transcript')
export class TranscriptController {
  constructor(private readonly transcriptService: TranscriptService) {}
  logger = new Logger('TranscriptController');
  @Get(':idTranscripcion')
  async findOne(
    @Param('idTranscripcion') idTranscripcion: number,
  ): Promise<Transcript> {
    this.logger.log(`findOne ${idTranscripcion}`);
    return this.transcriptService.findOne(idTranscripcion);
  }

  @Post()
  async create(
    @Body() createTranscriptDto: CreateTranscriptDto,
  ): Promise<Transcript> {
    this.logger.log(`create ${createTranscriptDto}`);
    return this.transcriptService.create(createTranscriptDto);
  }
}
