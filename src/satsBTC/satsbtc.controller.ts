import { Controller, Get } from '@nestjs/common';
import { SatsBTCService } from './satsbtc.service';

@Controller('sats-btc')
export class SatsBTCController {
  constructor(private readonly satsBTCService: SatsBTCService) {}

  @Get()
  findAll() {
    return this.satsBTCService.findAll();
  }
}
