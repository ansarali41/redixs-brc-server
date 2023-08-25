import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatsBTC } from './base/entity/stasbtc';
import { TokenDetails } from './base/entity/token-details';
import { TokenPrice } from './base/entity/token-price';
import { CornService } from './corn.service';
import { SatsBTCController } from './satsbtc.controller';
import { SatsBTCService } from './satsbtc.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([SatsBTC, TokenDetails, TokenPrice]),
  ],
  controllers: [SatsBTCController],
  providers: [SatsBTCService, CornService],
})
export class SatsBTCModule {}
