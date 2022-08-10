Feature: Rare FB Tests

    Scenario: Simple purchase
        Given I visit "rarefbtests.xyz"
        When I open the catalog
        Then I can see the products
        When I select product "A"
        Then I can see the product "A" page
        When I add the product to my cart
        Then I can see the product appears in the cart
        When I click the cart
        Then I can see the cart page
        When I click Checkout
        Then I get to the Checkout page
        Then I wait for a second