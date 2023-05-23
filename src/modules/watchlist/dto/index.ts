import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WatchListDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  assetId: string;
}
