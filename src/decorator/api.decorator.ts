import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

type ApiOptions = {
  summary?: string;
  reqType?: any;
  resType?: any;
};

export const Api = ({ summary, reqType, resType }: ApiOptions = {}) => {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiBody({ type: reqType }),
    ApiResponse({ type: resType, status: 200 }),
  );
};
