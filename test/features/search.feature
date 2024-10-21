Feature: Search Funtionality

    Validate the working of Search functionality

    Background:
        Given I am on the Home page

    Scenario:TC_SF_001-Validate searching with an existing Product Name

        When I type iMac on the search field
        And  I Click on the search button
        Then I should see iMac in the search results



