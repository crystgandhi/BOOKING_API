import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

//Read ENV variable
// call dotenv.config() with the matching file path
// Load the appropriate .env file based on the ENV variable
const envName = process.env.ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `.env.${envName}`) });

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
//   retries: 2,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 1,
  
  reporter: 'html',
  
  use: {
    baseURL: 'https://restful-booker.herokuapp.com',
    trace: 'on-first-retry',
      headless: false,
     },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    
    ],
 
});
