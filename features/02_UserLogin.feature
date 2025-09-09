Feature: User Login Feature

  @Scenario1 @Login
  Scenario: Successful login with valid credentials
    Given User is on the login page
    When enter a valid email and password
    And click on the Login button
    Then User should be redirected to the homepage
    And User should able to logout

  @Scenario2 @Login2
  Scenario: Login fails with incorrect password
    Given User is on the login page
    When enter a valid email and invalid password
    And  click on the Login button
    Then User should Error message for invalid credentials