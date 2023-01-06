import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { InteractionModule } from './interaction/interaction.module';
import { ParameterModule } from './parameter/parameter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    InteractionModule,
    ParameterModule,
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}
