import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsInteractionController } from './analytics-interaction.controller';
import { AnalyticsInteractionService } from './analytics-interaction.service';
import { AnalyticsInteraccion } from './entities/analytics-interaction.entity';
@Module({
  imports: [TypeOrmModule.forFeature([AnalyticsInteraccion])],
  controllers: [AnalyticsInteractionController],
  providers: [AnalyticsInteractionService],
})
export class AnalyticsInteractionModule {}
