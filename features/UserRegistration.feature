Feature: User Registration Feature

Feature: User Registration

 @Scenario1 @registration
    Scenario: Successful user registration
        Given User is on the registration page
        When Enter mandatory fields
        And click on the Register button
        Then User should be registered successfully
        And User should able to logout
