import { Controller, Get } from '@nestjs/common';
import { SatsBTCService } from './satsbtc.service';

@Controller('sats-btc')
export class SatsBTCController {
  constructor(private readonly satsBTCService: SatsBTCService) {}

  @Get()
  async getAllTokenData() {
    try {
      const results = await this.satsBTCService.getAllTokenData();

      console.log('results end');
      return {
        count: results.length,
        data: results,
      };
    } catch (error) {
      console.error(`Error while fetching data: ${error.message}`);
    }
  }
}
