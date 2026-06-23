import {test, expect} from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } }); // mobile

test('responsive login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  //await expect(page.locator('.menu-icon')).toBeVisible();
});