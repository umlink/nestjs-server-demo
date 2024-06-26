import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateResumeDto } from './create-resume.dto';
import { IsInt } from 'class-validator';

export class UpdateResumeDto extends PartialType(CreateResumeDto) {
  @IsInt()
  @ApiProperty()
  id: number;
}
