import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
  console.log("Appenv",process.env.APP_ENV);
  await page.goto(`${process.env.Base_URL}`);
  const username = await page.locator('#user-name');
  const pword = await page.locator('#password');
  const login = await page.locator('#login-button');
  await username.fill(`${process.env.UName}`);
  await pword.fill(`${process.env.Password}`);
  await login.click();


});
