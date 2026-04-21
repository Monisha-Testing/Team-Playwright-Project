import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('Login Test', async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/');
  await login.login('test@example.com', 'password');
});
