import { Controller, Get, Query } from '@nestjs/common';
import { SatsBTCService } from './satsbtc.service';
import { ApiQuery } from '@nestjs/swagger';

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

  @Get('all')
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getAllTokenFromDatabase(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    try {
      const results = await this.satsBTCService.getAllTokenFromDatabase(
        limit,
        offset,
      );

      console.log('results end');
      return results;
    } catch (error) {
      console.error(`Error while fetching data: ${error.message}`);
    }
  }
}
