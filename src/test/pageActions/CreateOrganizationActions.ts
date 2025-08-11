import { CreateOrganizationPage } from "../pageObjects/CreateOrganizationPage";

export class CreateOrganizationActions {
  constructor(private orgPage: CreateOrganizationPage) {}

  async goOrganizationtab() {
    await this.orgPage.navigateToOrganizationTab();
  }

  async opencreateorgsidetray() {
    await this.orgPage.openCreateOrganizationsidetray();
  }


  async fillsidetrayWithoutOrgName() {
    await this.orgPage.fillAddress("28, Gandhi Nagar, Somewhere in the World");
    await this.orgPage.selectCountry(0);
    await this.orgPage.selectState(1);
    await this.orgPage.selectCity(1);
    await this.orgPage.fillPincode("345266");
    await this.orgPage.checkAssessment("Practice");
    await this.orgPage.checkAssessment("Graded");
    await this.orgPage.checkAssessmenttype("Aptitude+");
  }

  async getError() {
    return this.orgPage.getOrgNameError();
  }
// *********************************************************************************************


  async fillsidetrayWithAllMandatoryFields() {
    await this.orgPage.fillOrganizationName("khalid test-2");
    await this.orgPage.fillAddress("28, Gandhi Nagar, Somewhere in the World");
    await this.orgPage.selectCountry(0); 
    await this.orgPage.selectState(1);    
    await this.orgPage.selectCity(1);     
    await this.orgPage.fillPincode("345266");
    await this.orgPage.checkAssessment("Practice");
    await this.orgPage.checkAssessment("Graded");
    await this.orgPage.checkAssessmenttype("Aptitude+");
    await this.orgPage.fillLicenseCount("10");
  }

  async submitsidetray() {
    await this.orgPage.clickCreateButton();
  }
}
