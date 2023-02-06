import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsEventController } from './analytics-event.controller';
import { AnalyticsEventService } from './analytics-event.service';
import { AnalyticsEvento } from './entities/analytics-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnalyticsEvento])],
  controllers: [AnalyticsEventController],
  providers: [AnalyticsEventService],
})
export class AnalyticsEventModule {}
