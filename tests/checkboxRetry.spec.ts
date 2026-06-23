import { test, expect } from '@playwright/test';

test('Uncheck Beginner and Advanced', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-table/');

  await page.getByLabel('Beginner').uncheck();
  await page.getByLabel('Advanced').uncheck();

  await expect(page.getByLabel('Beginner')).not.toBeChecked();
  await expect(page.getByLabel('Advanced1')).not.toBeChecked();
});