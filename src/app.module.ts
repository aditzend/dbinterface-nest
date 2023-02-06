import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { InteractionModule } from './interaction/interaction.module';
import { ParameterModule } from './parameter/parameter.module';
import { TranscriptModule } from './transcript/transcript.module';
import { AnalyticsInteractionModule } from './analytics-interaction/analytics-interaction.module';
import { AnalyticsEventModule } from './analytics-event/analytics-event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    InteractionModule,
    ParameterModule,
    TranscriptModule,
    AnalyticsInteractionModule,
    AnalyticsEventModule,
  ],

  controllers: [AppController],
})
export class AppModule {}
