Feature: Login functionality
  As a user of the Swag Labs application
  I want to log in with different credential combinations
  So that I can verify the login form behaves correctly

  Background:
    Given I am on the login page

  Scenario: UC-1 Submit empty credentials
    When I enter username "test"
    And I enter password "test"
    And I clear the username field
    And I clear the password field
    And I click the Login button
    Then I should see the error message "Username is required"

  Scenario: UC-2 Submit username without password
    When I enter username "test"
    And I enter password "test"
    And I clear the password field
    And I click the Login button
    Then I should see the error message "Password is required"

  Scenario Outline: UC-3 Successful login with valid users
    When I enter username "<username>"
    And I enter password "secret_sauce"
    And I click the Login button
    Then I should see the inventory page titled "Swag Labs"

    Examples:
      | username                |
      | standard_user           |
      | locked_out_user         |
      | problem_user            |
      | performance_glitch_user |
      | error_user              |
      | visual_user             |

