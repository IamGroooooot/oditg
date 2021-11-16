import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionController } from './champion/champion.controller';
import { ChampionService } from './champion/champion.service';

@Module({
  imports: [],
  controllers: [AppController, ChampionController],
  providers: [AppService, ChampionService],
})
export class AppModule {}
