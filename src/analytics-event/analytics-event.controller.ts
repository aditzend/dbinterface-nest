import { Controller } from '@nestjs/common';
import { AnalyticsEventService } from './analytics-event.service';
import { Logger } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateAnalyticsEventDto } from './dto/create-analytics-event.dto';

@Controller('v3/analytics-event')
export class AnalyticsEventController {
  constructor(private readonly analyticsEventService: AnalyticsEventService) {}
  logger = new Logger('AnalyticsEventController');
  @Post()
  async create(@Body() createAnalyticsEventDto: CreateAnalyticsEventDto) {
    this.logger.log(`create ${createAnalyticsEventDto}`);
    return this.analyticsEventService.create(createAnalyticsEventDto);
  }
}
