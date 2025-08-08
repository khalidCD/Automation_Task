
import { LoginPage } from '../pageObjects/LoginPage';
import { LoginActions } from '../pageActions/LoginActions';
import { page } from '../hooks/Loginhooks';
import { expect } from '@playwright/test';

export async function loginSuccessfully() {
  await page.goto(process.env.BASE_URL!); 
  const loginPage = new LoginPage(page);
  const loginActions = new LoginActions(loginPage);

  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;

  await loginActions.login(email, password);

  const dashboard = page.getByText("dashboard");
  await expect(dashboard).toBeVisible({ timeout: 10000 });
}
