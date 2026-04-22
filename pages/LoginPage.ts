import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ForgotPasswordPage } from './ForgotPassword';
export class LoginPage extends BasePage {
  clickForgotPassword() {
      throw new Error('Method not implemented.');
  }
  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="text"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button:has-text("SIGN IN")');
  }
}