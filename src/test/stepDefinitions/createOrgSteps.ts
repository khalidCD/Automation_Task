import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginSuccessfully } from "../utilities/loginUtil";
import { page } from "../hooks/hooks";
import { CreateOrganizationPage } from "../pageObjects/CreateOrganizationPage";
import { CreateOrganizationActions } from "../pageActions/CreateOrganizationActions";

let createOrgPage: CreateOrganizationPage;
let createOrgActions: CreateOrganizationActions;

Given("the admin is logged in and on the Organization page", async () => {
  console.log("Admin logging in");
  await loginSuccessfully();

  createOrgPage = new CreateOrganizationPage(page);
  createOrgActions = new CreateOrganizationActions(createOrgPage);

  await createOrgActions.goOrganizationtab();
  console.log("Navigated to Organization tab");
});

When("the admin opens the Create Organization sidetray", async () => {
  console.log("Opening Create Organization sidetray");
  await createOrgActions.opencreateorgsidetray();
});

When(
  "the admin leaves the Organization Name field empty and fills the remaining mandatory fields",
  async () => {
    console.log("Filling sidetray without organization name");
    await createOrgActions.fillsidetrayWithoutOrgName();
  }
);

When("the admin submits the organization sidetray", async () => {
  console.log("Clicking Create button");
  await createOrgActions.submitsidetray();
});

Then(
  "a validation message for missing Organization Name should be displayed",
  async () => {
    console.log("Checking validation error");
    await expect(await createOrgActions.getError()).toBeVisible();
  }
);

// **************************************************************************************************************************

Given("the admin is logged in and on the Organization page for validation testing",async () => {
    console.log("Admin logging in for success scenario...");
    await loginSuccessfully();

    createOrgPage = new CreateOrganizationPage(page);
    createOrgActions = new CreateOrganizationActions(createOrgPage);

    await createOrgActions.goOrganizationtab();
    console.log("Navigated to Organization tab");
  }
);

When("the admin opens the Create Organization sidetray for success", async () => {
  console.log("Opening Create Organization sidetray for success");
  await createOrgActions.opencreateorgsidetray();
});

When("the admin fills all mandatory fields correctly", async () => {
  console.log("Filling sidetray with all mandatory fields");
  await createOrgActions.fillsidetrayWithAllMandatoryFields();
});

When("the admin submits the organization sidetray successfully", async () => {
  console.log("Clicking Create button for success");
  await createOrgActions.submitsidetray();
});
