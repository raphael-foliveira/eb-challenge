import { ApiProperty } from '@nestjs/swagger';

export class SearchQueryDTO {
  @ApiProperty()
  teamName: string | undefined;
}
