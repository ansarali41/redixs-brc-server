import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import { SatsBTC } from './base/entity/stasbtc';
import { TokenDetails } from './base/entity/token-details';
import { TokenPrice } from './base/entity/token-price';

@Injectable()
export class SatsBTCService {
  constructor(
    @InjectRepository(SatsBTC)
    private satsBTCRepository: Repository<SatsBTC>,
    @InjectRepository(TokenDetails)
    private tokenDetailsRepository: Repository<TokenDetails>,
    @InjectRepository(TokenPrice)
    private tokenPriceRepository: Repository<TokenPrice>,
  ) {}
  async getAllTokenData() {
    const totalPages = 20;
    const tokenLists = [];

    for (let page = 1; page <= totalPages; page++) {
      try {
        const response = await axios.get(
          `https://www.oklink.com/api/v5/explorer/btc/token-list?page=${page}&limit=${100}`,
          {
            headers: {
              'Ok-Access-Key': 'ce8293e8-1b9b-4b45-89cc-a9e5598ac310',
              'Content-type': 'application/json',
            },
          },
        );

        const tokenList = response.data.data[0].tokenList;
        tokenLists.push(...tokenList);
      } catch (error) {
        console.error(
          `Error fetching data from page ${page}: ${error.message}`,
        );
        throw error;
      }
    }

    return tokenLists;
  }

  async getAllTokenDetails() {
    const [results] = await this.satsBTCRepository.findAndCount({
      // take: 10,
    });

    const allTokenDetails = [];

    try {
      for (const tokenDetails of results) {
        const response = await axios.get(
          `https://www.oklink.com/api/v5/explorer/btc/token-details?token=${tokenDetails?.token}`,
          {
            headers: {
              'Ok-Access-Key': 'ce8293e8-1b9b-4b45-89cc-a9e5598ac310',
              'Content-type': 'application/json',
            },
          },
        );

        const tokenDetailsObj = response.data.data[0];
        if (tokenDetailsObj) {
          console.log('tokenDetailsObj', tokenDetailsObj);
          allTokenDetails.push(tokenDetailsObj);
        }
      }
    } catch (error) {
      console.error(`Error fetching token details data: ${error.message}`);
      throw error;
    }

    return allTokenDetails;
  }

  async getAllTokenPrices() {
    try {
      const priceResponse = await axios.get(
        `https://cors-proxy4.p.rapidapi.com/?https://api.gate.io/api/v4/ticker/ORDI_USDT`,
        {
          headers: {
            'X-RapidAPI-Key':
              '981ee8b175msh6fa5237edc05359p17a910jsn7a92bb01b88f',
          },
        },
      );

      console.log('response price', priceResponse.data.last);
      return priceResponse.data.last;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAllTokenFromDatabase(limit: number, offset: number) {
    try {
      const [results, total] = await this.satsBTCRepository.findAndCount({
        skip: offset,
        take: limit,
      });

      return { total, limit, data: results };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getTokenDetailsFromDB(limit: number, offset: number) {
    try {
      const [results, total] = await this.tokenDetailsRepository.findAndCount({
        skip: offset,
        take: limit,
      });

      return { total, limit, data: results };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
