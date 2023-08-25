import { Controller, Get, Param, Query } from '@nestjs/common';
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
      return {
        message: 'Token Price was retrieved successfully.',
        data: results,
      };
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

  @Get('token-details-list')
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

  @Get('token-details/:tokenName')
  async findOneTokenDetailsFromDB(@Param('tokenName') tokenName: string) {
    try {
      const tokeDetails = await this.satsBTCService.findOneTokenDetailsFromDB(
        tokenName,
      );

      return { message: 'Success.', data: tokeDetails };
    } catch (error) {
      console.error(
        `Error while fetching token details data: ${error.message}`,
      );
    }
  }

  @Get('token-price')
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getTokenPriceFromDB(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ) {
    try {
      const results = await this.satsBTCService.getTokenPriceFromDB(
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
