import { test, expect } from '@playwright/test';

//Sets the retry count for all tests in the current test file
test.describe.configure({ retries: 2 });

test('Successful Login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();
  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.locator('h1')).toContainText('Logged In Successfully');
  await expect(page.getByText('Log out')).toBeVisible();
});

test('Select Java language', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-table/');
  await page.getByLabel('Java').check();
  await page.screenshot({path:'screenshots/failed.png'})
  await expect(page.getByLabel('Java1')).toBeChecked();
});