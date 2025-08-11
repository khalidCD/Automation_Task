Feature: Create Organization validation and succesfull creation
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
   
