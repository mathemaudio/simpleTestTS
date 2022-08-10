import { Given, When, Then } from "@cucumber/cucumber";
import { pause } from "./sys/misc";
import { Wo } from "./world";




Given("I visit {string}", { timeout: 60 * 1000 }, async function (this:Wo, path:string) {
    await this.openUrl(`https://${path}`);
});

When("I open the catalog", async function (this:Wo) {
    await this.page.click('text=Catalog');
    await this.page.waitForURL('https://rarefbtests.xyz/collections/all');
    await pause(1000);
  });

Then("I can see the products", async function (this:Wo) {
    //await this.page.click('text=View Openings');
    await this.page.waitForSelector('text=Products');
    // await pause(1000);
});



When('I select product {string}', async function (this:Wo, product:string)  {
    await this.page.locator(`a:has-text("${product}")`).click();
    // await this.page.waitForURL('https://rarefbtests.xyz/products/'+product.toLowerCase());  
  });


  Then('I can see the product {string} page', async function (this:Wo, product:string) {
    await this.page.waitForSelector('text='+product);
  });


  When('I add the product to my cart', async function (this:Wo) {
    await this.page.locator('[aria-label="Add to cart"]').click();
});


  Then('I can see the product appears in the cart', async function (this:Wo) {
    await this.page.waitForSelector(`text=Just added to your cart`);
  });


  When('I click the cart', async function (this:Wo) {
    await this.page.locator('text=View cart (1)').click();
    await this.page.waitForURL('https://rarefbtests.xyz/cart');
    });


  Then('I can see the cart page', async function (this:Wo) {
    await this.page.waitForSelector(`text=Your cart`);
  });


  When('I click Checkout', async function (this:Wo) {
    await this.page.locator('text=Check out').click();
  });


  Then('I get to the Checkout page', async function (this:Wo) {
    await this.page.locator('text=Shipping address').click();

  });


  Then('I wait for a second', async function (this:Wo) {
    await pause(1000);

  });
