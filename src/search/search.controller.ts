import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { SearchQueryDTO } from './dto/searchBody.dto';
import { SearchService } from './search.service';
import { SearchResult } from './types/SearchResult';

@Controller('search')
export class SearchController {
  constructor(private robot: SearchService) {}

  @Get()
  @ApiQuery({ name: 'teamName', required: false })
  @ApiResponse({ status: 200, type: SearchResult })
  async search(@Query() { teamName = 'Cruzeiro' }: SearchQueryDTO) {
    if (!teamName) {
      throw new BadRequestException(
        'teamName cannot be empty when passed as a query parameter.',
      );
    }
    return this.robot.findNextGameOdds(teamName);
  }
}
