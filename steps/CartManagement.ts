
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import CartMangement from '../pages/CartManagementPage';
import { CommonMethods } from "../utils/CommonMethods";
import { testConfig } from '../support/Reporters/testConfig';
import { MyWorld } from "../support/Reporters/world";

const CartMang = new CartMangement();
Given('user is on homepage', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
When('user searches for {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
When('user adds first product to cart', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('product should appear in the shopping cart', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
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
