import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenPriceDto {
  @ApiProperty()
  period: number;

  @ApiProperty()
  low: string;

  @ApiProperty()
  volume: string;

  @ApiProperty()
  last: string;

  @ApiProperty()
  open: string;

  @ApiProperty()
  deal: string;

  @ApiProperty()
  close: string;

  @ApiProperty()
  change: string;

  @ApiProperty()
  high: string;

  @ApiProperty()
  result: string;

  @ApiProperty()
  avg: number;

  @ApiProperty()
  vol_ordi: string;

  @ApiProperty()
  vol_usdt: string;

  @ApiProperty()
  rate_change_percentage: string;

  @ApiProperty()
  rate_change_percentage_utc0: number;

  @ApiProperty()
  rate_change_percentage_utc8: number;
}
