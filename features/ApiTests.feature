
Feature:API CRUD Operations on GoREST Users

  # Create User
  @Scenario1 @api
  Scenario: Create a new user
    Given I send a POST request to "/users" with body
      """
      {
        "name": "Tamanna<random>",
        "email": "tamanna<random>@example.com",
        "gender": "female",
        "status": "active"
      }
      """
    Then The response status should be 201
    And The response should contain "Tamanna"
    And The response should have a valid "id"
    And I attach request and response to report

  # Read (GET) User
  @Scenario2 @api
  Scenario: Get the created user
    Given I send a GET request to "/users/{userId}"
    Then The response status should be 201
    And The response "name" should be "Tamanna"
    And The response "status" should be "active"
    And I attach request and response to report

  # Update User
   @Scenario3 @api
  Scenario: Update the created user
    Given I send a PUT request to "/users/{userId}" with body
      """
      {
        "name": "Tamanna Updated",
        "status": "inactive"
      }
      """
    Then The response status should be 200
    And The response "name" should be "Tamanna Updated"
    And The response "status" should be "inactive"
    And I attach request and response to report

  # Delete User
   @Scenario4 @api
  Scenario: Delete the created user
    Given I send a DELETE request to "/users/{userId}"
    Then The response status should be 204
    And I attach request and response to report

   @Scenario5 @api
  #  Verify deleted user (should not exist)
  Scenario: Verify deleted user returns 404
    Given I send a GET request to "/users/{userId}"
    Then The response status should be 404
    And I attach request and response to report
