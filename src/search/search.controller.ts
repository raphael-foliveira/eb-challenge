import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SearchService } from './search.service';
import { Response } from 'express';

@Controller('search')
export class SearchController {
  constructor(private robot: SearchService) {}

  @Post()
  @HttpCode(200)
  async search(@Body() { teamName = 'Cruzeiro' }: { teamName: string }) {
    return this.robot.findNextGameOdds(teamName);
  }
}
