import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Transcript } from './transcript.entity';
import { CreateTranscriptDto } from './dto/create-transcript.dto';
@Injectable()
export class TranscriptService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Transcript)
    private transcriptRepo: Repository<Transcript>,
  ) {}

  async findOne(idTranscripcion: number): Promise<Transcript> {
    return this.transcriptRepo.findOneBy({ idTranscripcion });
  }

  async create(createTranscriptDto: CreateTranscriptDto) {
    return this.transcriptRepo.save(createTranscriptDto);
  }
}
