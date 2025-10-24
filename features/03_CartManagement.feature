Feature: Cart Management Feature

  @Scenario1 @registration
  Scenario: Add product to cart
    Given user is on homepage
    When user searches for "Laptop"
    And user adds first product to cart
    Then product should appear in the shopping cart

  # @Scenario2 @CartManagement
  # Scenario: Update quantity in cart
  #   Given user has product in cart
  #   When user updates product quantity to 2
  #   Then total price should be updated accordingly

  # @Scenario3 @CartManagement
  # Scenario: Remove product from cart
  #   Given user has product in cart
  #   When user removes the product
  #   Then cart should be empty
