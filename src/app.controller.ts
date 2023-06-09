import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  @ApiResponse({ status: 200, description: 'API Status Check', type: String })
  statusCheck(): string {
    return 'Ok';
  }
}
