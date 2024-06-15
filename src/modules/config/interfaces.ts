export type EnvConfig = {
  NODE_ENV: string;

  JWT_SECRET: string;
  JWT_AUTH_KEY: string;
  JWT_EXPIRES_IN: string;

  DATABASE_URL: string;
  DATABASE_EXPLICIT_CONNECT: string;

  CACHE_HTTP_GLOBAL_TTL: string;
  CACHE_HTTP_GLOBAL_MAX: string;

  LOG_PATH: string;
  LOG_MAX_SIZE: string;
  LOG_MAX_FILES: string;
};
