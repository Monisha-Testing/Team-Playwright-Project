import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPage } from './LoginPage';

export class ForgotPasswordPage extends BasePage {
    public readonly emailInput: Locator;
    public readonly submitButton: Locator;
    public readonly validationMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByLabel('Email*');
        
        this.submitButton = page.getByRole('button', { name: 'Reset Password' });
        this.validationMessage = page.locator('.error-message, .alert-danger, .success-message'); 
    }

    public async requestPasswordReset(email: string): Promise<void> {
        if (email !== "") {
            await this.emailInput.fill('shanmugapriya022@gmail.com');
        }
        await this.submitButton.click();
    }
}  
