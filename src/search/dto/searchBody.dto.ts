import { ApiProperty } from '@nestjs/swagger';

export class SearchBodyDTO {
  @ApiProperty()
  teamName: string;
}
