import { test, expect, Page } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { EnvUtils } from '../utils/envUtils';


test.describe('Checkout Functional Module', () => {
    
    test.beforeEach(async ({ page }) => {
        // In a real scenario, we might navigate to the Cart or Login first.
        // For these specific test cases, we start at the checkout entry point.
        await page.goto(EnvUtils.BASE_URL);
    });

    test('TC-TS-003-001: Verify successful navigation to Checkout Overview', async ({ page }, testInfo) => {
        const checkoutPage = new CheckoutPage(page);
        
        // Navigation to 'Your Information' (Simulated via URL if direct access allowed)
        await page.goto(`${EnvUtils.BASE_URL}/checkout-step-one.html`);
        
        await checkoutPage.fillShippingDetails('John', 'Doe', '12345');
        await checkoutPage.clickContinue();
        
        await expect(page).toHaveURL(/.*checkout-step-two.html/);
    });

    test('TC-TS-004-001: Successful Order Completion via Finish Button', async ({ page }, testInfo) => {
        const checkoutPage = new CheckoutPage(page);
        
        // Start from Overview Page
        await page.goto(`${EnvUtils.BASE_URL}/checkout-step-two.html`);
        
        await expect(checkoutPage.finishButton).toBeVisible();
        await checkoutPage.clickFinish();
        
        await expect(checkoutPage.successHeader).toContainText('THANK YOU FOR YOUR ORDER');
        await expect(page).toHaveURL(/.*checkout-complete.html/);
    });

    test('TC-TS-004-001-Neg: Validation of All Mandatory Fields', async ({ page }, testInfo) => {
        const checkoutPage = new CheckoutPage(page);
        
        await page.goto(`${EnvUtils.BASE_URL}/checkout-step-one.html`);
        
        await checkoutPage.clearShippingDetails();
        await checkoutPage.clickContinue();
        
        const errorText = await checkoutPage.errorMessage.textContent();
        expect(errorText).toContain('Error');
        await expect(page).not.toHaveURL(/.*checkout-step-two.html/);
    });
});