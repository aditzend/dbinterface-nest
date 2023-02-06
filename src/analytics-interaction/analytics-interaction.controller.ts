import { Controller } from '@nestjs/common';
import { AnalyticsInteractionService } from './analytics-interaction.service';
import { Logger } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateAnalyticsInteractionDto } from './dto/create-analytics-interaction.dto';

@Controller('v3/analytics-interaction')
export class AnalyticsInteractionController {
  constructor(
    private readonly analyticsInteractionService: AnalyticsInteractionService,
  ) {}
  logger = new Logger('AnalyticsInteractionController');
  @Post()
  async create(
    @Body() createAnalyticsInteractionDto: CreateAnalyticsInteractionDto,
  ) {
    this.logger.log(`create ${createAnalyticsInteractionDto}`);
    return this.analyticsInteractionService.create(
      createAnalyticsInteractionDto,
    );
  }
}
