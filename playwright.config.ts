import { defineConfig } from '@playwright/test';

import dotenv from 'dotenv';


// Read environment variables from file.
if (process.env.PARAM === undefined) {
  dotenv.config({
    path: `./environment/.env.production`
  })
}
else {
  dotenv.config({
    path: `./environment/.env.${process.env.PARAM}`
  })
}


export default defineConfig({
  testDir: './tests',
  use: {
  //  headless: true,
  },
});
