import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { NotLogin } from '@/decorator/auth.decorators';
import { RequiredRoles } from '@/decorator/roles.decorator';
import { RolesEnums } from '@/constants/enums';
import { Api } from '@/decorator/api.decorator';

@Controller('template')
@RequiredRoles(RolesEnums.Admin, RolesEnums.SuperAdmin)
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post('/create')
  @Api({ summary: '创建简历' })
  create(@Body() createTemplateDto: CreateTemplateDto) {
    return this.templateService.create(createTemplateDto);
  }

  @Get('/all')
  @NotLogin()
  findAll() {
    return this.templateService.findAll();
  }

  @Get('/:id')
  @NotLogin()
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(+id);
  }

  @Patch(':id')
  @RequiredRoles(RolesEnums.Admin, RolesEnums.SuperAdmin)
  update(@Param('id') id: string, @Body() updateTemplateDto: UpdateTemplateDto) {
    return this.templateService.update(+id, updateTemplateDto);
  }

  @Delete(':id')
  @RequiredRoles(RolesEnums.Admin, RolesEnums.SuperAdmin)
  remove(@Param('id') id: string) {
    return this.templateService.remove(+id);
  }
}
