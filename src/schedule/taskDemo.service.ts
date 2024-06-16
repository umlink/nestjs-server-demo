import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskDemoService {
  private readonly logger = new Logger(TaskDemoService.name);

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    Logger.log('这是一个定时任务，每 10s 执行一次');
  }
}
