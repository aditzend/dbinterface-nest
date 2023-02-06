import { Module } from '@nestjs/common';
import { TranscriptService } from './transcript.service';
import { TranscriptController } from './transcript.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transcript } from './transcript.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Transcript])],
  providers: [TranscriptService],
  controllers: [TranscriptController],
})
export class TranscriptModule {}
