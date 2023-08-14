import { Module } from '@nestjs/common';
import { SatsBTCController } from './satsbtc.controller';
import { SatsBTCService } from './satsbtc.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CornService } from './corn.service';
import { SatsBTC } from './base/entity/stasbtc';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ScheduleModule.forRoot(), TypeOrmModule.forFeature([SatsBTC])],
  controllers: [SatsBTCController],
  providers: [SatsBTCService, CornService],
})
export class SatsBTCModule {}
