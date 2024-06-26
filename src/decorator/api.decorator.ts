import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

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
  list.push(
    ApiResponse({
      status: 200,
      type: resType ?? String,
    }),
  );

  return applyDecorators(...list);
};
