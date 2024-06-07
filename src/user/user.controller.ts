import { Controller, Get, Query, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
// @Controller({ host: 'admin.example.com' })
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  @Get('/all')
  // @HttpCode() 自定义先
  // @Header('Cache-Control', 'none')
  // @Redirect('https://nestjs.com', 301)
  findAll(@Query('version') version: string): string {
    console.log(version)
    return this.userService.GerUsers()
  }
  @Get('/update/:id')
  update (@Param() params: any): string {
    console.log(params.id)
    return params.id
  }
}