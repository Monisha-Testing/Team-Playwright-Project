import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('Login Test', async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('https://qabrains.com/practice-site');
  //await login.login('test@example.com', 'password');
  //await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator("//span[@class='after']//*[name()='svg']//*[name()='path' and contains(@d,'M313.941 2')]").click();
  await page.goto('https://qabrains.com/auth/login');
  //await page.waitForTimeout(2000);
  await page.locator('#authForm > form > div:nth-child(4) > input')
  .fill('shanmugapriya@qaoncloud.com');
  await page.locator('#authForm > form > div.form-group.mb-1 > div > input')
  .fill('rVRnqUTM7d7q@yW');

  await page.locator('#authForm > form > div:nth-child(7) > button').click();

});
