import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { SatsBTCService } from './satsbtc.service';
import { InjectRepository } from '@nestjs/typeorm';
import { SatsBTC } from './base/entity/stasbtc';
import { Repository } from 'typeorm';

@Injectable()
export class CornService {
  constructor(
    private satsBTCService: SatsBTCService,
    @InjectRepository(SatsBTC)
    private satsBTCRepository: Repository<SatsBTC>,
  ) {}

  //  @Cron('0 0 */2 * *') // This will run the task every 2 days at midnight (00:00)
  @Cron('*/30 * * * * *')
  async handleCron() {
    console.log('Called every 30 seconds');

    // Clear existing data in the table
    await this.satsBTCRepository.clear();
    console.log('satsBTCRepository cleared');

    // Fetch data using satsBTCService
    const result = await this.satsBTCService.getAllTokenData();
    console.log('Cron result');

    // Save the new result in satsBTCRepository
    // Perform batch insert
    const batchSize = 500; // You can adjust the batch size based on performance
    for (let i = 0; i < result.length; i += batchSize) {
      const batch = result.slice(i, i + batchSize);
      await this.satsBTCRepository.save(batch);
    }
    console.log('Data saved in satsBTCRepository');
  }
}
