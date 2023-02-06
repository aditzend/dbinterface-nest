import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsInteractionService } from './analytics-interaction.service';

describe('AnalyticsInteractionService', () => {
  let service: AnalyticsInteractionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyticsInteractionService],
    }).compile();

    service = module.get<AnalyticsInteractionService>(AnalyticsInteractionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
