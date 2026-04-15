import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('https://practice.qabrains.com/ecommerce/login');
  await page.fill('#email', 'test@qabrains.com');
  await page.fill('#password', 'Password123');
  await page.click('button[type="submit"]');
}