import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Api } from '@/decorator/api.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('resume')
@ApiTags('简历')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post('/create')
  @Api({
    summary: '创建简历',
    reqType: CreateResumeDto,
    resType: Number,
  })
  createResume(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }

  @Post('/info/:id')
  @Api({
    summary: '获取建立详情',
    resType: Number,
  })
  getResumeInfo(@Param('id', ParseIntPipe) id: number) {
    return this.resumeService.findOne(id);
  }

  @Post('/update')
  updateResume(@Param('id') id: string, @Body() updateResumeDto: UpdateResumeDto) {
    return this.resumeService.update(+id, updateResumeDto);
  }

  @Post('/remove/:id')
  removeResume(@Param('id') id: string) {
    return this.resumeService.remove(+id);
  }
}
