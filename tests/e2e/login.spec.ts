import { test, expect } from '@playwright/test';
import {RetryWithAssertions } from '../../utils/retryUtils';

test('Successful Login', async ({ page }) => {
await page.goto('https://automationexercise.com/login');
const email = `test${Date.now()}@gmail.com`;
await page.locator('input[data-qa="signup-name"]').fill('John');
await page.locator('input[data-qa="signup-email"]').fill(email);
  await page.locator('button[data-qa="signup-button"]').click();
//Retries a value until it matches.
/*await expect.poll(async () => {
  return await page.locator('button[data-qa="signup-button"]').isEnabled();
}).toBe(true);*/

//Retries the entire block until all assertions pass
/*await expect(async () => {
  await page.locator('button[data-qa="signup-button"]').click();
  const heading=page.locator('(//h2)[1]');
  const title=await heading.textContent();
  expect(title).toBe('Enter Account Information');
  await expect(page).toHaveURL(/signup/);
}).toPass();*/

await RetryWithAssertions(async () => {
  await expect(page).toHaveURL(/signup/);
  await expect(page.locator('(//h2)[1]'))
    .toHaveText('Enter Account Information1');
});

});