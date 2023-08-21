import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SatsBTCService } from './satsbtc.service';

@Controller('sats-btc')
export class SatsBTCController {
  constructor(private readonly satsBTCService: SatsBTCService) {}

  @Get('test-token')
  async getAllTokenData() {
    try {
      const results = await this.satsBTCService.getAllTokenData();

      return {
        count: results.length,
        data: results,
      };
    } catch (error) {
      console.error(`Error while fetching token data: ${error.message}`);
      throw error;
    }
  }
  @Get('test-token-details')
  async getAllTokenDetails() {
    try {
      const results = await this.satsBTCService.getAllTokenDetails();

      return {
        count: results.length,
        data: results,
      };
    } catch (error) {
      console.error(
        `Error while fetching token details data: ${error.message}`,
      );
      throw error;
    }
  }

  @Get('test-price')
  async getAllTokenPrice() {
    try {
      const results = await this.satsBTCService.getAllTokenPrices();

      // return {
      //   count: results.length,
      //   data: results,
      // };
      return { data: results };
    } catch (error) {
      console.error(`Error while fetching price data: ${error.message}`);
      throw error;
    }
  }

  @Get('token-list')
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getAllTokenFromDB(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    try {
      const results = await this.satsBTCService.getAllTokenFromDatabase(
        limit,
        offset,
      );

      return results;
    } catch (error) {
      console.error(`Error while fetching data: ${error.message}`);
    }
  }

  @Get('token-details')
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getTokenDetailsFromDB(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ) {
    try {
      const results = await this.satsBTCService.getTokenDetailsFromDB(
        limit,
        offset,
      );

      return results;
    } catch (error) {
      console.error(
        `Error while fetching token details data: ${error.message}`,
      );
    }
  }
}
