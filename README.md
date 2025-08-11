# SkillsMax Admin Portal Automation

This repository contains  automated tests for the SkillsMax Admin Portal using:

- [Playwright](https://playwright.dev/) for browser automation.
- [Cucumber.js](https://cucumber.io/docs/installation/javascript/) for BDD-style scenarios.
- TypeScript for test code.

##  Project Structure
```bash

src/
test/
features/ 
stepDefinitions/ 
pageObjects/ 
pageActions/ 
hooks/ 
utilities/ 
```


### Example Folder Contents

- **features/**
  - `user.feature` — Scenarios for creating bulk and single users.
- **pageObjects/**
  - `userPage.ts` — Locators and UI element access for User tab.
- **pageActions/**
  - `userActions.ts` — Steps for navigating and creating users.
- **stepDefinitions/**
  - `UserSteps.ts` — Step definitions mapping Gherkin to Playwright code.



##  Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/khalidCD/Automation_Task>
   cd <Testing_Task>
   ```

2. **Install dependencies:**
```bash
  npm install
  ```
3. **Run all tests:**
```bash
 npx cucumber-js
  ```
##  Features:

1. **Feature: Login Functionality**
```bash
Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user should be redirected to the dashboard

Scenario: Login fails with incorrect email or password
  Given the user is on the login page
  When the user enters invalid credentials
  Then an error message should be displayed
  And the user should remain on the login page
  ```

2. **Feature: Create Organization validation and succesfull creation**
 ```bash
  @failureorg
  Scenario: Show validation error when a required field is missing
    Given the admin is logged in and on the Organization page
    When the admin opens the Create Organization sidetray
    And the admin leaves the Organization Name field empty and fills the remaining mandatory fields
    And the admin submits the organization sidetray
    Then a validation message for missing Organization Name should be displayed

  Scenario: Successfully create a new organization
    Given the admin is logged in and on the Organization page for validation testing
    When the admin opens the Create Organization sidetray for success
    And the admin fills all mandatory fields correctly
    And the admin submits the organization sidetray
   ```
3. **Feature: Create Bulk Users**
```bash
  Scenario: Admin creates bulk users successfully
    Given I am logged in to the Admin Portal
    When I navigate to the User tab
    And I click the Create User button
    And I choose the Create Bulk User option
    And I click the Next button
    And I select an organization and upload the bulk user file
    And I click Next on the "Learners" step
    And I click Next on the "Tags" step
    And I click the Confirm & Create button
 ```