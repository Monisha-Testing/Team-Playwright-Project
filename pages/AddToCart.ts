import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { logout } from '../utils/logout';
test('Add to Cart',async({page})=> {
    // Login page
     await login(page);
    const shirt=page.getByAltText('Sample Shirt Name');
    await expect(shirt).toBeVisible();
    await shirt.click();
    const AddToCart=page.getByRole('button', { name: /add to cart/i });
    await expect(AddToCart).toBeVisible();
    await AddToCart.click();
    // verify added product in the cart
   const cartIcon = page.locator('a:has(svg[viewBox="0 0 576 512"])');
    await cartIcon.click(); // go to cart
    
      const productInCart = page.getByText('Sample Shirt Name');
    await expect(productInCart).toBeVisible(); // verify shirt added to the cart
  await logout(page);
   
  



}


)