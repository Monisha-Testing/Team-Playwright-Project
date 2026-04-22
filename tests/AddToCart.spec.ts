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

test('Add to Cart',async({page})=> {
    // Login page
     await login(page);
    const shirt=page.getByAltText('Sample Shirt Name');
    await expect(shirt).toBeVisible();
    await shirt.click();
    const AddToCart=page.locator('button').filter({ hasText: 'Add to cart' }).first();
    //await expect(AddToCart).toBeVisible();
    await AddToCart.click();
    // verify added product in the cart
   const cartIcon = page.locator("//*[name()='path' and contains(@d,'M528.12 30')]");
    await cartIcon.click(); // go to cart
    
      const productInCart = page.getByRole('heading', { name: 'Sample Shirt Name' });
    await expect(productInCart).toBeVisible(); // verify shirt added to the cart
  await logout(page);
   
  

}


)