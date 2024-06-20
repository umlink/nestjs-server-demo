import { ResVO } from '@/interface/response-vo';
export class RegisterUserVo extends ResVO {
  data: {
    id: string;
  };
  constructor(data: any) {
    super();
    this.data = data;
  }
}
