import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator';

type ApiOptions = {
  summary?: string;
  reqType?: any;
  resType?: any;
};

export const Api = ({ summary, reqType, resType }: ApiOptions = {}) => {
  const list = [ApiOperation({ summary })];
  if (reqType) {
    list.push(ApiBody({ type: reqType }));
  }
  const resOptions: ApiResponseOptions = { status: 200 };
  if (resType) {
    resOptions.type = resType;
  }
  list.push(ApiResponse(resOptions));

  return applyDecorators(...list);
};
