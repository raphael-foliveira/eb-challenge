import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { AppController } from './app.controller';

@Module({
  imports: [SearchModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
