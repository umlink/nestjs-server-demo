import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator';

type ApiOptions = {
  summary?: string;
  reqType?: any;
  resType?: any;
  queryType?: any;
  paramType?: any;
};

export const Api = ({ summary, reqType, resType, queryType, paramType }: ApiOptions = {}) => {
  const list = [ApiOperation({ summary })];
  if (reqType) {
    list.push(ApiBody({ type: reqType }));
  }
  if (queryType) {
    list.push(ApiQuery({ type: queryType }));
  }
  if (paramType) {
    list.push(ApiParam({ type: paramType, name: '' }));
  }
  const resOptions: ApiResponseOptions = { status: 200 };
  if (resType) {
    resOptions.type = resType;
  }
  list.push(ApiResponse(resOptions));

  return applyDecorators(...list);
};
