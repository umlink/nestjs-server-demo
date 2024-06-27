export type EnvConfig = {
  NODE_ENV: string;

  SERVER_PORT: string;
  SERVER_HOST: string;

  MAIL_USER_EMAIL: string;
  MAIL_AUTH_CODE: string;
  MAIL_SERVER_HOST: string;
  MAIL_SERVER_PORT: string;
  MAIL_SERVER_SECURE: string;
  MAIL_FORM_NAME: string;

  MD5_SALT: string;

  API_PREFIX: string;
  API_ENABLED_SWAGGER: string;

  JWT_SECRET: string;
  JWT_AUTH_KEY: string;
  JWT_EXPIRES_IN: string;

  DATABASE_URL: string;
  DATABASE_LOG_LEVEL: string;

  CACHE_HTTP_GLOBAL_TTL: string;
  CACHE_HTTP_GLOBAL_MAX: string;

  UPLOAD_PATH: string;
  UPLOAD_HOST: string;
  UPLOAD_MAX_SIZE: string;
  UPLOAD_QI_NIU_ACCESS_KEY: string;
  UPLOAD_QI_NIU_SECRET_KEY: string;
  UPLOAD_QI_NIU_BUCKET: string;

  LOG_PATH: string;
  LOG_MAX_SIZE: string;
  LOG_MAX_FILES: string;

  THROTTLE_SHORT_TTL: string;
  THROTTLE_SHORT_LIMIT: string;
  THROTTLE_MEDIUM_TTL: string;
  THROTTLE_MEDIUM_LIMIT: string;
  THROTTLE_LONG_TTL: string;
  THROTTLE_LONG_LIMIT: string;
};
