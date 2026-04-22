import { test, expect, Page } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { EnvUtils } from '../utils/envUtils';


test.describe('Checkout Functional Module', () => {
    
    test.beforeEach(async ({ page }) => {
        // In a real scenario, we might navigate to the Cart or Login first.
        // For these specific test cases, we start at the checkout entry point.
        await page.goto('https://practice.qabrains.com/ecommerce/login');
        await page.getByRole('textbox', { name: 'Email*' }).fill('test@qabrains.com');
        await page.getByRole('textbox', { name: 'Password*' }).fill('Password123');
        await page.getByRole('button', { name: 'Login' }).click();
    
       
    });

    test('TC-TS-003-001: Verify successful navigation to Checkout Overview', async ({ page }, testInfo) => {
        const checkoutPage = new CheckoutPage(page);
        
        // Navigation to 'Your Information' (Simulated via URL if direct access allowed)
        //await page.goto(`${EnvUtils.BASE_URL}/checkout-step-one.html`);
        await page.locator('button').filter({ hasText: 'Add to cart' }).first().click();
        await page.locator("//*[name()='path' and contains(@d,'M528.12 30')]").click();
        await page.getByText('Checkout', { exact: true }).click();
        await page.getByRole('textbox', { name: 'Ex. John' }).fill('John');
        await page.getByRole('textbox', { name: 'Ex. Doe' }).fill('Doe');
        //await checkoutPage.fillShippingDetails('John', 'Doe', '12345');
        await page.getByText('Continue', { exact: true }).click();
        await page.getByText('Finish', { exact: true }).click();
        //await expect(page).toHaveURL(/.*checkout-step-two.html/);
    });
})
