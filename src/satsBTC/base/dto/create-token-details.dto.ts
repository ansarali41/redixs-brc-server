import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDetailsDto {
  @ApiProperty()
  token: string;

  @ApiProperty()
  precision: string;

  @ApiProperty()
  totalSupply: string;

  @ApiProperty()
  mintAmount: string;

  @ApiProperty()
  limitPerMint: string;

  @ApiProperty()
  holder: string;

  @ApiProperty()
  deployAddress: string;

  @ApiProperty()
  logoUrl: string;

  @ApiProperty()
  txId: string;

  @ApiProperty()
  inscriptionId: string;

  @ApiProperty()
  deployHeight: string;

  @ApiProperty()
  deployTime: string;

  @ApiProperty()
  inscriptionNumber: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  tokenType: string;

  @ApiProperty()
  msg: string;
}
