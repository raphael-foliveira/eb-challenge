import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchBodyDTO } from './dto/searchBody.dto';
import { SearchResult } from './types/SearchResult';
import { ApiResponse } from '@nestjs/swagger';

@Controller('search')
export class SearchController {
  constructor(private robot: SearchService) {}

  @Post()
  @HttpCode(200)
  @ApiResponse({ status: 200, type: SearchResult })
  async search(@Body() { teamName = 'Cruzeiro' }: SearchBodyDTO) {
    return this.robot.findNextGameOdds(teamName);
  }
}
