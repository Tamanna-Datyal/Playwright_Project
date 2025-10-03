
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import CartMangement from '../pages/CartManagementPage';
import { CommonMethods } from "../utils/CommonMethods";
import { testConfig } from '../support/Reporters/testConfig';
import { MyWorld } from "../support/Reporters/world";

const CartMang = new CartMangement();
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