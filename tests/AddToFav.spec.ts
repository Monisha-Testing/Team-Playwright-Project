import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { logout } from '../utils/logout';

test.beforeEach(async ({ page }) => {
        // In a real scenario, we might navigate to the Cart or Login first.
        // For these specific test cases, we start at the checkout entry point.
        await page.goto('https://practice.qabrains.com/ecommerce/login');
        await page.getByRole('textbox', { name: 'Email*' }).fill('test@qabrains.com');
        await page.getByRole('textbox', { name: 'Password*' }).fill('Password123');
        await page.getByRole('button', { name: 'Login' }).click();
    
       
    });

test('Add to Fav',async({page})=> {
    // Login page
   //await login(page);
    // Add first item as fav
    const firstHeartIcon = await page.locator("//div[@class='container py-3 mb-10']//div[1]//span[1]//button[1]//*[name()='svg']");
await firstHeartIcon.click();

// verify heart colur changes to red.
 await expect(firstHeartIcon).toHaveCSS('color', 'rgb(255, 0, 0)');
 await logout(page);


})