import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SatsBTCService {
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
}
