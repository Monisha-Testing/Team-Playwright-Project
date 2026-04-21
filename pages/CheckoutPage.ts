import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    // Info Page Locators
    public readonly firstNameInput: Locator;
    public readonly lastNameInput: Locator;
    public readonly zipCodeInput: Locator;
    public readonly continueButton: Locator;
    public readonly errorMessage: Locator;

    // Overview Page Locators
    public readonly finishButton: Locator;
    public readonly totalLabel: Locator;

    // Complete Page Locators
    public readonly successHeader: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.zipCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.errorMessage = page.locator('[data-test="error"]');
        this.successHeader = page.getByRole('heading', { level: 2 });
        this.totalLabel = page.locator('.summary_total_label');
    }

    public async fillShippingDetails(firstName: string, lastName: string, zip: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zip);
    }

    public async clearShippingDetails(): Promise<void> {
        await this.firstNameInput.clear();
        await this.lastNameInput.clear();
        await this.zipCodeInput.clear();
    }

    public async clickContinue(): Promise<void> {
        await this.continueButton.click();
    }

    public async clickFinish(): Promise<void> {
        await this.finishButton.click();
    }
}