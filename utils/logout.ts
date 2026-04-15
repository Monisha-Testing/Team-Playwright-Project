import { Page, expect } from '@playwright/test';

export async function logout(page: Page) {
  // Open dropdown
  await page.locator('.user-name').click();

  // Ensure logout option is visible before clicking
  const logoutBtn = page.getByRole('menuitem', { name: 'Logout' });

  await expect(logoutBtn).toBeVisible();
  await logoutBtn.click();

  await page.waitForURL('**/login');
}
