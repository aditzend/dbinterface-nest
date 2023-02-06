import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { AnalyticsInteraccion } from './entities/analytics-interaction.entity';
import { CreateAnalyticsInteractionDto } from './dto/create-analytics-interaction.dto';
@Injectable()
export class AnalyticsInteractionService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(AnalyticsInteraccion)
    private analyticsInteractionRepo: Repository<AnalyticsInteraccion>,
  ) {}

  async create(createAnalyticsInteractionDto: CreateAnalyticsInteractionDto) {
    return this.analyticsInteractionRepo.save(createAnalyticsInteractionDto);
  }
}
