import { Body, Controller, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Api } from '@/decorator/api.decorator';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@/decorator/user.decorators';
import { UserBaseInfoVO } from '@/modules/users/entities/user.entity';
import { ResumeItemVO, ResumeListVO } from '@/modules/resume/vo/resume.entity';
import { QueryResumeDto } from '@/modules/resume/dto/query-resume.dto';
import { errorHandler } from '@/utils/prisma-utils';
import { RequiredVip } from '@/decorator/vip.decorators';

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
  @RequiredVip()
  createResume(@Body() createResumeDto: CreateResumeDto, @User() user: UserBaseInfoVO) {
    return this.resumeService.create(createResumeDto, user.id);
  }

  @Post('/update')
  @RequiredVip()
  @Api({
    summary: '更新我的简历',
    reqType: UpdateResumeDto,
  })
  async updateResume(@User() user: UserBaseInfoVO, @Body() updateResumeDto: UpdateResumeDto) {
    const resume = await this.resumeService.update(user.id, updateResumeDto).catch(errorHandler);
    if (resume) return null;
  }

  @Post('/info/:id')
  @Api({
    summary: '获取我的简历详情',
    resType: ResumeItemVO,
  })
  async getResumeInfo(@Param('id', ParseIntPipe) id: number, @User() user: UserBaseInfoVO) {
    const resume = await this.resumeService.findOne(id, user.id).catch(errorHandler);
    if (!resume) {
      throw new HttpException('未找到该简历', HttpStatus.BAD_REQUEST);
    }
    return resume;
  }

  @Post('/remove/:id')
  @Api({
    summary: '删除我的简历',
  })
  async removeResume(@Param('id') id: string, @User() user: UserBaseInfoVO) {
    console.log(id, user);
    return this.resumeService.remove(+id, user.id).catch(errorHandler);
  }

  @Post('/list')
  @Api({
    summary: '我的简历列表',
    reqType: QueryResumeDto,
    resType: ResumeListVO,
  })
  getResumeList(@User() user: UserBaseInfoVO, @Body() query: QueryResumeDto) {
    return this.resumeService.findAll({
      ...query,
      id: user.id,
    });
  }
}
