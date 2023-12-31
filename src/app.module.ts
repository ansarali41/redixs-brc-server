import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatsBTC } from './satsBTC/base/entity/stasbtc';
import { ConfigModule } from '@nestjs/config';
import { SatsBTCModule } from './satsBTC/satsbtc.module';
import { TokenPrice } from './satsBTC/base/entity/token-price';
import { TokenDetails } from './satsBTC/base/entity/token-details';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [SatsBTC, TokenDetails, TokenPrice],
      synchronize: true,
    }),
    SatsBTCModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
