//reads the correct environment file based on the execution environment
export const ENV_CONFIG = {
  env:           process.env.ENV           || 'qa',
  baseUrl:       process.env.BASE_URL      || '',
  apiBaseUrl:    process.env.API_BASE_URL  || '',
  username:      process.env.USERNAME      || '',
  password:      process.env.PASSWORD      || '',
} as const;