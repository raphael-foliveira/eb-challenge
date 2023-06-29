import { SearchService } from './search.service';

describe('search controller', () => {
  let searchService: SearchService;

  beforeEach(() => {
    searchService = new SearchService();
  });

  describe('search', () => {
    it("should return the next cruzeiro's game odds", async () => {
      expect(await searchService.findNextGameOdds('Cruzeiro')).toBeTruthy();
    });
  });
});
