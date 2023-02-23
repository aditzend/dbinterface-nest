import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { InteractionModule } from './interaction/interaction.module';
import { ParameterModule } from './parameter/parameter.module';
import { TranscriptModule } from './transcript/transcript.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    InteractionModule,
    DatabaseModule,
    ParameterModule,
    TranscriptModule,
  ],

  controllers: [AppController],
})
export class AppModule {}
