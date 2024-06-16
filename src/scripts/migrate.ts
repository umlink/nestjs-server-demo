import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { exec } from 'child_process';

function main() {
  dotenv.config({ path: resolve(process.cwd(), '.env.development') });
  exec(`export DATABASE_URL=${process.env.DATABASE_URL}`, (err, stdout) => {
    console.log(err);
    console.log(stdout);
  });
  exec('npx prisma migrate dev');
}

main();
