import { ApiProperty } from '@nestjs/swagger';

export class WinnerOdd {
  @ApiProperty()
  result: string;
  @ApiProperty()
  odd: number;
}

export class SearchResult {
  @ApiProperty()
  homeTeam: string;
  @ApiProperty()
  awayTeam: string;
  @ApiProperty()
  date: string;
  @ApiProperty({ type: [WinnerOdd] })
  winnerOdds: WinnerOdd[];
}
