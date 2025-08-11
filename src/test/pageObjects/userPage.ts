import { Page } from '@playwright/test';

export class UserPage {
  constructor(private page: Page) {}

  userMenu = () => this.page.locator('//a//child::p[text()="User"]');
  createUserBtn = () => this.page.locator('//button[text()="Create User"]');
  bulkUserOption = () => this.page.locator('//input[@type="radio" and @value="bulk-user"]');
  nextButton = () => this.page.locator('//button//child::p[text()="Next"]');
  bulkUserHeader = () => this.page.locator('//h6[contains(text(),"UPLOAD FILE")]');

  organizationDropdown = () => this.page.locator('//input[@id="organization-select"]');
  organizationOption = (orgName: string) => this.page.locator(`//li[text()="${orgName}"]`);
  fileInput = () => this.page.locator('//input[@type="file"]');

  confirmCreateBtn = () => this.page.locator('//button//child::p[text()="Confirm & Create"]');
  usersList = () => this.page.locator('//table//tr');

  async clickUserMenu() { await this.userMenu().click(); }
  async clickCreateUserButton() { await this.createUserBtn().click(); }
  async selectBulkUserOption() { await this.bulkUserOption().click(); }
  async clickNextButton() { await this.nextButton().click(); }

  async selectOrganization(orgName: string) {
    await this.organizationDropdown().click();
    await this.organizationOption(orgName).click();
  }

  async uploadBulkUserFile(filePath: string) {
    await this.fileInput().setInputFiles(filePath);
  }

  async clickConfirmCreate() {
    await this.confirmCreateBtn().click();
  }

}
