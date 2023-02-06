import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { AnalyticsEvento } from './entities/analytics-event.entity';
import { CreateAnalyticsEventDto } from './dto/create-analytics-event.dto';
@Injectable()
export class AnalyticsEventService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(AnalyticsEvento)
    private analyticsEventRepo: Repository<AnalyticsEvento>,
  ) {}

  logger = new Logger('AnalyticsEventService');
  async create(createAnalyticsEventDto: CreateAnalyticsEventDto) {
    this.logger.error(
      `create${createAnalyticsEventDto.texto} ${createAnalyticsEventDto.canal}`,
    );
    return this.analyticsEventRepo.save(createAnalyticsEventDto);
  }
}
