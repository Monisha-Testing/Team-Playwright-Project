import { expect, Locator, Page } from '@playwright/test';


/**
 * Abstract BasePage to be extended by all Page Objects.
 * Contains common reusable methods.
 */
export abstract class BasePage {
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to a specific URL.
     * @param path The path to navigate to.
     */
    public async navigate(path: string = ''): Promise<void> {
        await this.page.goto(path);
    }

    /**
     * Wait for a locator to be enabled.
     */
    public async waitForEnabled(locator: Locator, timeout?: number): Promise<void> {
        await expect(locator).toBeEnabled({ timeout: timeout ?? 10000 });
    }

    /**
     * Safely retrieves text content from a locator.
     */
    public async getText(locator: Locator): Promise<string> {
        return (await locator.textContent()) || '';
    }
}