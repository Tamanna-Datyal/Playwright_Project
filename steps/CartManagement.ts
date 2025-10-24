
import { Given, When, Then } from '@cucumber/cucumber';
import { expect as chaiExpect, expect } from 'chai';
import { ICustomWorld } from '../support/custom-world';
import CartMangement from '../pages/CartManagementPage';
import { CommonMethods } from "../utils/CommonMethods";
import { testConfig } from '../support/Reporters/testConfig';
import { MyWorld } from "../support/Reporters/world";

const CartMang = new CartMangement();
Given('user is on homepage', async function () {
  const { page } = this;
  await page?.goto(testConfig.SI_URL)
  await page?.locator(CartMang.Hometext).isVisible();
  const homepage = await page?.locator(CartMang.Hometext).textContent();
  if (homepage.includes('nopCommerce')) {
    this.attach("Home page opened ");
  }

  const homeScreenshot = await this.page?.screenshot();
  if (homeScreenshot) {
    await this.attach(homeScreenshot, 'image/png');
  }
});
When('user searches for {string}', async function (string) {
  const { page } = this;
  await page?.fill(CartMang.searchProductglobal, "product");
  await page?.locator(CartMang.globalsearchbutton).click();
  await page?.fill(CartMang.searcproduct, "laptop");
  await page?.locator(CartMang.presseenter).click();


});
When('user adds first product to cart', async function () {
  const { page } = this;
  if (CartMang.noproductfound) {
    this.attach("No product found");
  } else {
    await page?.waitForSelector('.product-item');
    // Click on first "Add to cart" button
    const firstProduct = page?.locator('.product-item').first();
    await firstProduct.locator('text=Add to cart').click();
    // If product goes to details page, handle add to cart there
    if (await this.page!.locator('#add-to-cart-button-4').isVisible().catch(() => false)) {
      await this.page!.click('#add-to-cart-button-4');
    }

    // Wait for confirmation message
    await expect(this.page!.locator('.bar-notification.success')).contains('The product has been added');
  }
});
Then('product should appear in the shopping cart', async function () {
  await this.page!.click('.ico-cart');
  if(CartMang.nodatafoundtext){
    this.attach("No data found in cart");
  } else {
  await this.page!.waitForSelector('.cart-item-row');
  const cartItem = await this.page!.locator('.cart-item-row').first();
  const visible = await cartItem.isVisible();
  chaiExpect(visible).to.be.true;
  }
});


When('user updates product quantity to {int}', async function (int) {
  // When('user updates product quantity to {float}', async function (float) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('total price should be updated accordingly', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Given('user has product in cart', async function () {
  const { page } = this;
});

When('user removes the product', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('cart should be empty', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('total price should be updated accordingly', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('user updates product quantity to {int}', (int: number) => {
  // Write code here that turns the phrase above into concrete actions
})
Then('total price should be updated accordingly', () => {
  // Write code here that turns the phrase above into concrete actions
})
