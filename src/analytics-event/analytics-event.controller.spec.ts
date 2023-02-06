import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsEventController } from './analytics-event.controller';

describe('AnalyticsEventController', () => {
  let controller: AnalyticsEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyticsEventController],
    }).compile();

    controller = module.get<AnalyticsEventController>(AnalyticsEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
