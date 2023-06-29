import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';
import { Datum, F, SearchResponse, Sn } from './types/SearchResponse';
import { returnWinnerOrDraw } from './utils/returnWinnerOrDraw';
import * as moment from 'moment';
import { SearchResult } from './types/SearchResult';

@Injectable()
export class SearchService {
  private searchUrl =
    'https://estrelabet.com/api-v2/name-search/d/23/estrelabet/';

  /**
   * Executes the search for the next game's winner odds
   */
  async findNextGameOdds(teamName: string): Promise<SearchResult> {
    const nextGameInfo = await this.getTeamsNextGameInfo(teamName);
    const nextGameOdds = nextGameInfo.btgs.find(
      (bet) => bet.btgN === 'Resultado',
    );
    const winnerOdds = nextGameOdds.fos.map((currOdd) => ({
      result: returnWinnerOrDraw(currOdd.hSh),
      odd: currOdd.hO,
    }));
    const date =
      moment(nextGameInfo.fsd)
        .locale('america/sao-paulo')
        .utcOffset('-03:00')
        .format('MMMM Do YYYY, HH:mm') + ' (GMT -3)';
    return {
      homeTeam: nextGameInfo.hcN,
      awayTeam: nextGameInfo.acN,
      date,
      winnerOdds,
    };
  }

  /**
   * Gets the specified team's next game
   */
  private async getTeamsNextGameInfo(teamName: string) {
    const response = await axios.post(
      this.searchUrl + teamName,
      {
        requestBody: {
          name: teamName,
          bragiUrl: 'https://bragi.sportingtech.com/',
        },
        device: 'd',
        languageId: 23,
      },
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Origin: 'https://estrelabet.com',
          Referer: 'https://estrelabet.com/ptb/bet/fixture-detail/48014828',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
          bragiurl: 'https://bragi.sportingtech.com/',
          'sec-ch-ua':
            '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      },
    );
    if (!response.data.success) {
      throw new InternalServerErrorException('Search failed');
    }

    const searchResponse: SearchResponse = response.data;
    const soccerResults: Datum[] = searchResponse.data.filter(
      (d) => d.stSURL === 'soccer',
    );
    const allSeasons = soccerResults.map((result) => result.cs[0].sns).flat();
    const games = this.findGamesFromSeasons(allSeasons);
    if (games.length === 0) {
      throw new HttpException('No future games were found', 404);
    }

    return games.reduce((previous, current) =>
      current.fsd < previous.fsd ? current : previous,
    );
  }

  private findGamesFromSeasons(seasons: Sn[]) {
    const games: F[] = [];
    seasons.forEach((season) => {
      return season.fs.forEach((event) => {
        if (new Date(event.fsd) > new Date() && event.acN && event.hcN) {
          return games.push(event);
        }
      });
    });
    return games;
  }
}
