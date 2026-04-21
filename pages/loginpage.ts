import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="text"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button:has-text("SIGN IN")');
  }
}
