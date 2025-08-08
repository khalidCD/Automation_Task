import { Page, Locator } from '@playwright/test';

export class LoginPage {
   email: Locator;
   password: Locator;
  loginButton: Locator;

  constructor( page: Page) {
    this.email = page.getByPlaceholder('Email'); 
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: "Login" }); 
  }
}