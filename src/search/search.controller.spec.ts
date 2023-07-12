import { SearchController } from './search.controller';
import { SearchService } from './search.service';

describe('search controller', () => {
  let searchController: SearchController;
  let searchService: SearchService;

  beforeEach(() => {
    searchService = new SearchService();
    searchController = new SearchController(searchService);
  });

  describe('search', () => {
    it("should return the next cruzeiro's game odds", async () => {
      const result = { test: 'mocked' } as unknown as Promise<any>;
      jest.spyOn(searchService, 'findNextGameOdds').mockResolvedValue(result);

      expect(await searchController.search({ teamName: 'Bahia' })).toBe(result);
    });
  });
});
