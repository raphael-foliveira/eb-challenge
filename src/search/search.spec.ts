import { INestApplication } from '@nestjs/common';
import { SearchService } from './search.service';
import { Test } from '@nestjs/testing';
import { SearchModule } from './search.module';
import * as request from 'supertest';

describe('search end to end', () => {
  let app: INestApplication;
  let searchService = {
    findNextGameOdds: () => Promise.resolve({ test: 'mocked' }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [SearchModule],
    })
      .overrideProvider(SearchService)
      .useValue(searchService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET search', () => {
    return request(app.getHttpServer()).get('/search').expect(200);
  });
});
