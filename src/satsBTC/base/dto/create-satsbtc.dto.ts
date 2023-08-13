import { ApiProperty } from '@nestjs/swagger';

export class CreateSatsbtcDto {
  @ApiProperty()
  client_id: number;
}
