import { SetMetadata } from '@nestjs/common';

export const IS_VIP_KEY = 'required-vip';
export const Vip = () => SetMetadata(IS_VIP_KEY, true);
