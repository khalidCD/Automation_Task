import { LoginPage } from '../pageObjects/LoginPage';


export class LoginActions {
  constructor(private loginPage: LoginPage) {}

  async login(email: string, password: string) {
    await this.loginPage.email.fill(email);
    await this.loginPage.password.fill(password);
    await this.loginPage.loginButton.click();
  }
}