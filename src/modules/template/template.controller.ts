import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TemplateService } from './template.service';
import { NotLogin } from '@/decorator/auth.decorators';
import { Api } from '@/decorator/api.decorator';
import { TemplateItemVO, TemplateListVo } from '@/modules/template/entities/template.entity';
import { ApiTags } from '@nestjs/swagger';
import { TemplateQueryDto } from '@/modules/template/dto/query-template.dto';

@Controller('template')
@ApiTags('简历模板')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post('/all')
  @NotLogin()
  @Api({
    summary: '获取所有建立模板列表',
    reqType: TemplateQueryDto,
    resType: TemplateListVo,
  })
  findAll(@Body() query: TemplateQueryDto) {
    return this.templateService.findAll(query);
  }

  @Get('/info/:id')
  @NotLogin()
  @Api({ summary: '简历详情', resType: TemplateItemVO })
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(+id);
  }
}
