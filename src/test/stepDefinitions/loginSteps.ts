

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { loginSuccessfully } from '../utilities/loginUtil';
import { page } from '../hooks/hooks';
import { LoginPage } from '../pageObjects/LoginPage';
import { LoginActions } from '../pageActions/LoginActions';
import dotenv from 'dotenv';

dotenv.config(); 

let loginPage: LoginPage;
let loginActions: LoginActions;

Given('the user is on the login page', async () => {
  await page.goto(process.env.BASE_URL!); 
});

When('the user logs in with valid credentials', async () => {
  await loginSuccessfully();
});

Then('the user should be redirected to the dashboard', async () => {
  const dashboard = page.getByText("dashboard");
  await expect(dashboard).toBeVisible({ timeout: 10000 });
});

When('the user enters invalid credentials', async () => {
  loginPage = new LoginPage(page);
  loginActions = new LoginActions(loginPage);
  await loginActions.login('sathishkumar@gmail.com', 'sathish1111');
});

Then('an error message should be displayed', async () => {
  const errorMessage = page.getByText("Incorrect email or password");
  await expect(errorMessage).toBeVisible();
});

Then('the user should remain on the login page', async () => {
  await expect(page).toHaveURL(process.env.BASE_URL!);
});
