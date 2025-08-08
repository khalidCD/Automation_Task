
Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user should be redirected to the dashboard

Scenario: Login fails with incorrect email or password
  Given the user is on the login page
  When the user enters invalid credentials
  Then an error message should be displayed
  And the user should remain on the login page
