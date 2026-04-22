import { Page, expect } from '@playwright/test';

export async function logout(page: Page) {
  // Open dropdown
  await page.locator("//span[@class='caret font-bold']//*[name()='svg']").click();
 // await page.locator('.user-name').click();

  // Ensure logout option is visible before clicking
  const logoutBtn = page.getByText('Log out', { exact: true });

  await expect(logoutBtn).toBeVisible();
  await logoutBtn.click();
  await page.getByText('Logout', { exact: true }).click();

  await page.waitForURL('**/login');
}
