import { Body, Controller, Param, Post } from '@nestjs/common';
import { TemplateService } from './template.service';
import { NotLogin } from '@/decorator/auth.decorators';
import { Api } from '@/decorator/api.decorator';
import { TemplateItemVO, TemplateListVo } from '@/modules/template/vo/template.vo';
import { ApiTags } from '@nestjs/swagger';
import { TemplateQueryDto } from '@/modules/template/dto/query-template.dto';

@ApiTags('Template')
@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post('/list')
  @NotLogin()
  @Api({
    summary: '获取所有建立模板列表',
    reqType: TemplateQueryDto,
    resType: TemplateListVo,
  })
  getTemplateList(@Body() query: TemplateQueryDto) {
    return this.templateService.findAll(query);
  }

  @Post('/info/:code')
  @NotLogin()
  @Api({ summary: '简历模板详情', resType: TemplateItemVO })
  getTemplateInfo(@Param('code') code: string) {
    return this.templateService.findOne(code);
  }
}
