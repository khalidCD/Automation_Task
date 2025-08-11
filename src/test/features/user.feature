Feature: Create Bulk Users

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
 
 Scenario: Admin uploads bulk user file with invalid email
  Given I am logged in to the Admin Portal
  When I navigate to the User tab
  And I click the Create User button
  And I choose the Create Bulk User option
  And I click the Next button
  And I select an organization and upload the bulk user file with invalid email
  Then I should see an error message "Invalid email format"