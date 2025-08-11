import { Page } from "@playwright/test";

export class CreateOrganizationPage {
  constructor(private page: Page) {}


  orgTab = () => this.page.locator('//a//child::p[text()="Organization"]');
  createOrgButton = () => this.page.locator('//button[text()="Create Organization"]');
  orgNameInput = () => this.page.locator('//input[@placeholder="Organisation Name"]');
  addressTextarea = () => this.page.locator('//textarea[@name="address"]');
  countryDropdown = () => this.page.locator('//input[@id="«r19»"]');
  stateDropdown = () => this.page.locator('//input[@id="«r1c»"]');
  cityDropdown = () => this.page.locator('//input[@id="«r1g»"]');
  pincodeInput = () => this.page.locator('//input[@placeholder="XXXXXX"]');
  licenseInput = () => this.page.locator('//*[@id="«r1j»"]'); 
  createButton = () => this.page.locator('//button//child::p[text()="Create"]');
  orgNameError = () => this.page.locator('//div[text()="Organisation Name is required"]');

  async navigateToOrganizationTab() {
    await this.orgTab().click();
  }

  async openCreateOrganizationsidetray() {
    await this.createOrgButton().click();
  }

  async fillOrganizationName(name: string) {
    await this.orgNameInput().fill(name);
  }

  async fillAddress(address: string) {
    await this.addressTextarea().fill(address);
  }

  async selectCountry(index: number) {
    await this.countryDropdown().click();
    await this.page.locator(`//li[@id="«r19»-option-${index}"]`).click();
  }

  async selectState(index: number) {
    await this.stateDropdown().click();
    await this.page.locator(`//li[@id="«r1c»-option-${index}"]`).click();
  }

  async selectCity(index: number) {
    await this.cityDropdown().click();
    await this.page.locator(`//li[@id="«r1g»-option-${index}"]`).click();
  }

  async fillPincode(pincode: string) {
    await this.pincodeInput().fill(pincode);
  }

  async checkAssessment(label: string) {
    await this.page
      .locator(`//p[text()='${label}']//parent::div//child::input[@type='checkbox']`)
      .check();
  }

  async checkAssessmenttype(label: string) {
    await this.page
      .locator(`//p[text()='${label}']//parent::div//child::input[@type='checkbox']`)
      .check();
  }

  async fillLicenseCount(count: string) {
    await this.licenseInput().fill(count);
  }

  async clickCreateButton() {
    await this.createButton().click();
  }

  async getOrgNameError() {
    return this.orgNameError();
  }
}
