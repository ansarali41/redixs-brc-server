import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SatsBTC } from './base/entity/stasbtc';
import { TokenDetails } from './base/entity/token-details';
import { TokenPrice } from './base/entity/token-price';
import { SatsBTCService } from './satsbtc.service';

@Injectable()
export class CornService {
  constructor(
    private satsBTCService: SatsBTCService,
    @InjectRepository(SatsBTC)
    private satsBTCRepository: Repository<SatsBTC>,
    @InjectRepository(TokenDetails)
    private tokenDetailsRepository: Repository<TokenDetails>,
    @InjectRepository(TokenPrice)
    private tokenPriceRepository: Repository<TokenPrice>,
  ) {}

  //  @Cron('0 0 */2 * *') // This will run the task every 2 days at midnight (00:00)

  // Token List Corn Job
  @Cron('0 0 */2 * *')
  async saveAllTCronTokenListCorn() {
    // Clear existing data in the table
    await this.satsBTCRepository.clear();

    // Fetch data using satsBTCService
    const result = await this.satsBTCService.getAllTokenDetails();

    // Save the new result in Repository
    // Perform batch insert
    const batchSize = 500; // You can adjust the batch size based on performance
    for (let i = 0; i < result.length; i += batchSize) {
      const batch = result.slice(i, i + batchSize);
      await this.satsBTCRepository.save(batch);
    }
    // console.log('Token list Data saved in satsBTCRepository');
  }

  // Token Details Corn Job
  // @Cron('*/50 * * * * *')
  @Cron('0 0 */2 * *')
  async saveAllTokenDetails() {
    // Clear existing data in the table
    await this.tokenDetailsRepository.clear();
    // console.log('token details data base cleared');

    // Fetch data using satsBTCService
    const result = await this.satsBTCService.getAllTokenDetails();

    // Save the new result in Repository
    // Perform batch insert
    const batchSize = 200; // You can adjust the batch size based on performance
    for (let i = 0; i < result.length; i += batchSize) {
      const batch = result.slice(i, i + batchSize);
      await this.tokenDetailsRepository.save(batch);
    }

    // console.log('Token details Data saved in satsBTCRepository');
  }

  // Token Details Corn Job
  // @Cron('*/30 * * * * *')
  @Cron('0 */1 * * *') // Run every 60 minutes
  async saveTokenPriceDetails() {
    // Clear existing data in the table
    await this.tokenPriceRepository.clear();

    // Fetch data using satsBTCService
    const tokenPrice = await this.satsBTCService.getAllTokenPrices();

    // Save the new result in Repository
    await this.tokenPriceRepository.save(tokenPrice);

    // console.log('Token Price Details Data saved in satsBTCRepository');
  }
}
