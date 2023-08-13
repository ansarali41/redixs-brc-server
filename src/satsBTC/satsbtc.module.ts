import { Module } from '@nestjs/common';
import { SatsBTCController } from './satsbtc.controller';
import { SatsBTCService } from './satsbtc.service';

@Module({
  imports: [],
  controllers: [SatsBTCController],
  providers: [SatsBTCService],
})
export class SatsBTCModule {}
