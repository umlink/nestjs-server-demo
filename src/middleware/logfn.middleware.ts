import { FastifyReply, FastifyRequest } from 'fastify';
import { NextFunction } from 'express';

export default (
  req: FastifyRequest['raw'],
  res: FastifyReply['raw'],
  next: NextFunction,
) => {
  console.log('全局函数式中间件', req.url);
  next();
};
