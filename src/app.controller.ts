import { Controller, Get, UseFilters } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getHello(): string {
    return 'Mail home';
  }
}
