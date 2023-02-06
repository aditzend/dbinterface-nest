import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('version')
  getVersion(): string {
    return 'Version 3 Branch: "incoming_task_params"';
  }
}
