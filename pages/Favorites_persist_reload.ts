import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { logout } from '../utils/logout';

test('Add to Fav',async({page})=> {
    // Login page
   await login(page);
    // Add first item as fav
    const firstHeartIcon = page.locator('button:has(svg)').nth(0);
await firstHeartIcon.click();

// verify heart colur changes to red.
 await expect(firstHeartIcon).toHaveCSS('color', 'rgb(255, 0, 0)');
 await page.reload();// reload page and check fav button
  const favAfterReload = page.locator('button:has(svg)').nth(0);
  await expect(favAfterReload).toHaveCSS('color', 'rgb(255, 0, 0)');



})