import axios from 'axios';
import { SearchService } from './search.service';
import { readFileSync } from 'fs';

describe('search controller', () => {
  let searchService: SearchService;

  beforeEach(() => {
    searchService = new SearchService();
    const mockContent = readFileSync('./mockResponse.json');
    jest.spyOn(axios, 'post').mockResolvedValue({
      data: JSON.parse(mockContent.toString()),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('search', () => {
    it("should return the next bahia's game odds", async () => {
      expect(await searchService.findNextGameOdds('Bahia')).toBeTruthy();
    });
  });
});
