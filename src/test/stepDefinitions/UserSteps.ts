import { Given, When, Then } from '@cucumber/cucumber';
import { loginSuccessfully } from '../utilities/loginUtil';
import { page } from '../hooks/hooks';
import { UserPage } from '../pageObjects/userPage';
import { UserActions } from '../pageActions/userActions';

let userActions: UserActions;

Given('I am logged in to the Admin Portal', async function () {
  await loginSuccessfully();
  const userPage = new UserPage(page);
  userActions = new UserActions(userPage);
});

When('I navigate to the User tab', async function () {
  await userActions.navigateToUserTab();
});

When('I click the Create User button', async function () {
  await userActions.openCreateUserSidebar();
});

When('I choose the Create Bulk User option', async function () {
  await userActions.chooseBulkUserOption();
});

When('I click the Next button', async function () {
  await userActions.clickNextButton();
});

When('I select an organization and upload the bulk user file', async function () {
  const filePath = 'assets/bulk-sample-user.csv'
  await userActions.selectOrganizationAndUpload('khalid test', filePath);
  await userActions.clickNextButton();
});

When('I click Next on the {string} step', async function (stepName: string) {
  await userActions.clickNextButton();
});

When('I click the Confirm & Create button', async function () {
  await userActions.confirmAndCreate();
});


