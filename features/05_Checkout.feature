Feature: Checkout Process

  Scenario: Successful checkout with valid details
    Given user has product in cart
    When user proceeds to checkout
    And fills billing and shipping details
    And selects payment method
    And places the order
    Then confirmation message "Your order has been successfully processed!" should be shown

  Scenario: Checkout without billing info
    Given user has product in cart
    When user proceeds to checkout without billing details
    Then error message should be shown

  Scenario: Checkout with failed payment
    Given user has product in cart
    When user provides invalid payment details
    Then order should not be placed
