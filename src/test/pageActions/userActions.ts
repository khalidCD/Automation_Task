import { UserPage } from '../pageObjects/userPage';

export class UserActions {
  constructor(private userPage: UserPage) {}

  async navigateToUserTab() { await this.userPage.clickUserMenu(); }
  async openCreateUserSidebar() { await this.userPage.clickCreateUserButton(); }
  async chooseBulkUserOption() { await this.userPage.selectBulkUserOption(); }
  async clickNextButton() { await this.userPage.clickNextButton(); }

  async selectOrganizationAndUpload(orgName: string, filePath: string) {
    await this.userPage.selectOrganization(orgName);
    await this.userPage.uploadBulkUserFile(filePath);
  }

  async confirmAndCreate() { await this.userPage.clickConfirmCreate(); }

  async verifyInvalidEmailError() {
    const isVisible = await this.userPage.isInvalidEmailErrorVisible();
    if (!isVisible) {
      throw new Error('Expected "Invalid email format" error message was not shown');
    }
  }
}
