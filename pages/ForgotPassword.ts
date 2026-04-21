import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ForgotPasswordPage extends BasePage {
    public readonly emailInput: Locator;
    public readonly submitButton: Locator;
    public readonly validationMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByPlaceholder(/Email|Enter your email/i);
        this.submitButton = page.getByRole('button', { name: /Reset Password|Submit|Send Reset Link/i });
        this.validationMessage = page.locator('.error-message, .alert-danger, .success-message'); 
    }

    public async requestPasswordReset(email: string): Promise<void> {
        if (email !== "") {
            await this.emailInput.fill(email);
        }
        await this.submitButton.click();
    }
}  
