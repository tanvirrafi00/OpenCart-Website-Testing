Feature: Search Funtionality
    Validate the working of Search functionality

  Background:
    Given I am on the Home page

  Scenario: TC_SF_001-Validate searching with an existing Product Name
    When I type "iMac" on the search field
    And I Click on the search button
    Then I should see "iMac" in the search results

  Scenario: TC_SF_002-Validate searching with a non existing Product Name
    When I type "Fitbit" on the search field
    And I Click on the search button
    Then "There is no product that matches the search criteria." should be displayed in the search results

  Scenario: TC_SF_003-Validate searching without providing any Product Name
    When I type "" on the search field
    And I Click on the search button
    Then "There is no product that matches the search criteria." should be displayed in the search results

  @login
  Scenario: TC_SF_004-Validate searching for a product after login to the Application
    When I click on the account option from the menu
    And I click on the login
    Then I should be on the login page
    When i type "abc01@gmail.com" as a email and "1234567" as a password
    And I click on the login button
    When I type "iMac" on the search field
    And I Click on the search button
    Then I should see "iMac" in the search results
