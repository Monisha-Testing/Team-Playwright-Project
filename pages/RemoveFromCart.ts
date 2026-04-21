import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { logout } from '../utils/logout';

test('Remove from Cart',async({page})=> {
    // Login page
    await login(page);

    // Go to cart and check cart items
   await page.goto('https://practice.qabrains.com/ecommerce/cart');
   const cartItems= page.locator('div.flex.items-center.justify-between');
   
//Check initial cart count
const initialCount= await cartItems.count();
   console.log('Initial count is ', initialCount);
   await expect(cartItems).toHaveCount(initialCount); // Check cart has some items
   
//click 'Remove' button of first item
const removeButton= page.getByRole('button', { name: 'Remove' }).nth(0);
await removeButton.click();

//Check cart item count decrements
const updatedCount= await cartItems.count();
expect(updatedCount).toBe(initialCount-1);
await logout(page);

   

  



}


)