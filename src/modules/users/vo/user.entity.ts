import { ResVO } from '@/interface/response-vo';
import { ApiProperty } from '@nestjs/swagger';

class RegisterUserVo {
  id: string;
}
export class RegisterUserRes extends ResVO {
  @ApiProperty({ type: RegisterUserVo })
  data: RegisterUserVo;
  constructor(data: any) {
    super();
    this.data = data;
  }
}
