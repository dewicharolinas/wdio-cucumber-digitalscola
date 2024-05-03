Feature: Sauce login test

  Scenario Outline: User login successfuly 
    Given user is on sauce-demo page
    When user input username with "standard_user"
    And user input password with "secret_sauce"
    And user click button
    Then user should redirect to homepage

  Scenario Outline: User Add to cart successfuly 
    Given user is on sauce-demo dashboard page
    When user click add to cart button 
    Then cart badge should display value 

Scenario Outline: Item successfuly add to cart
    Given cart get a value
    When user click shoping cart link
    When user redirect to cart page 
    Then item should be in the cart page 
