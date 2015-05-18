Feature: Google integrity check
  As a visitor
  I want google.com to work
  So that I can search for stuff

  Scenario: Google title test
    Given I am not logged in
    When I visit google.com
    Then I should see Google in the title
