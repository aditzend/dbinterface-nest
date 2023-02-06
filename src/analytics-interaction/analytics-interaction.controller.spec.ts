import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsInteractionController } from './analytics-interaction.controller';

describe('AnalyticsInteractionController', () => {
  let controller: AnalyticsInteractionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyticsInteractionController],
    }).compile();

    controller = module.get<AnalyticsInteractionController>(AnalyticsInteractionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
