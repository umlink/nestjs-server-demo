import * as snowId from 'simple-flakeid';

let gen = new snowId.SnowflakeIdv1({ workerId: 1 });
/**
 * 雪花算法，id 生成器，15为数字
 * example: 574829628072019
 * */
export const genSnowUUId = () => gen.NextId();
