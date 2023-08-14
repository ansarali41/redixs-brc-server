import { ApiProperty } from '@nestjs/swagger';

export class CreateSatsbtcDto {
  @ApiProperty()
  token: string;

  @ApiProperty()
  deployTime: string;

  @ApiProperty()
  inscriptionId: string;

  @ApiProperty()
  inscriptionNumber: string;

  @ApiProperty()
  totalSupply: string;

  @ApiProperty()
  mintAmount: string;

  @ApiProperty()
  transactionCount: string;

  @ApiProperty()
  holder: string;

  @ApiProperty()
  mintRate: string;
}
