import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TemplateService } from './template.service';
import { NotLogin } from '@/decorator/auth.decorators';
import { Api } from '@/decorator/api.decorator';
import { TemplateItemVO, TemplateListVo } from '@/modules/template/entities/template.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('template')
@ApiTags('简历模板')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post('/all')
  @NotLogin()
  @Api({
    summary: '获取所有建立模板列表',
    resType: TemplateListVo,
  })
  findAll(
    @Query('pageSize', new DefaultValuePipe(0), ParseIntPipe) pageSize: number,
    @Query('pageNum', new DefaultValuePipe(0), ParseIntPipe) pageNum: number,
    @Query('isVip', ParseIntPipe) isVip?: number,
    @Query('keywords') keywords?: string,
  ) {
    return this.templateService.findAll({
      pageSize,
      pageNum,
      isVip,
      keywords,
    });
  }

  @Get('/:id')
  @NotLogin()
  @Api({ summary: '简历详情', resType: TemplateItemVO })
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(+id);
  }
}
