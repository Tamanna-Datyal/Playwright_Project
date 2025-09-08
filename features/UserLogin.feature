Feature: Sample Login Feature

@Scenario @Login
  Scenario: Successful login with valid credentials
    Given User is on the login page
    When enter a valid email and password
    And click on the Login button
    Then User should be redirected to the homepage
    And User should able to logout
  
    