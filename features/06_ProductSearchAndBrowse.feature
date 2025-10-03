Feature: Product Search and Browse Feature

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

    Scenario: Browse category and subcategory
    Given user is on homepage
    When user navigates to "Computers" category
    And selects "Desktops" subcategory
    Then related products should be displayed

  Scenario: Sort products by price (low to high)
    Given user is on "Electronics" category page
    When user applies sort by "Price: Low to High"
    Then products should be displayed in ascending order of price

  Scenario: Change product view
    Given user is on "Books" category page
    When user switches to "List" view
    Then products should be displayed in list layout