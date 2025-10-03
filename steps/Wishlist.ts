 
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import Wishlist from '../pages/WishlistPage';
import { CommonMethods } from "../utils/CommonMethods";
import { testConfig } from '../support/Reporters/testConfig';
import { MyWorld } from "../support/Reporters/world";

const Whishlist = new Wishlist(); 
 Given('user has product in wishlist', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
     When('user moves product to cart', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       Then('product should appear in cart and removed from wishlist', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });       
