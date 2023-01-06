import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('version')
  getVersion(): string {
    return 'incoming_task_params';
  }
}
