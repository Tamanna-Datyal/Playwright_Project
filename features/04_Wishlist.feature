Feature: Wishlist Management

@Scenario1 @Wishlist
  Scenario: Add product to wishlist (logged in)
    Given user is logged in
    When user adds a product to wishlist
    Then product should appear in wishlist page

@Scenario1 @Wishlist
  Scenario: Add product to wishlist (guest)
    Given user is not logged in
    When user tries to add a product to wishlist
    Then system should prompt user to login

@Scenario1 @Wishlist
  Scenario: Move product from wishlist to cart
    Given user has product in wishlist
    When user moves product to cart
    Then product should appear in cart and removed from wishlist
