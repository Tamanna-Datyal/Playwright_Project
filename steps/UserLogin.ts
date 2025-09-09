import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import UserLoginPage from '../pages/UserLoginPage';
import UserRegistartion from '../pages/UserRegistrationPage';
import { CommonMethods } from "../utils/CommonMethods";
import { testConfig } from '../support/Reporters/testConfig';
import { MyWorld } from "../support/Reporters/world";

const userLogin = new UserLoginPage();
const userReg = new UserRegistartion();




Given('User is on the login page', async function () {
  const { page } = this;
  await page?.goto(testConfig.SI_URL)

  this.attach("Login page opened and Validated");
  await page?.locator(userLogin.loginPage).click();
  await page?.locator(userLogin.SignText).isVisible();
  const loginScreenshot = await this.page?.screenshot();
  if (loginScreenshot) {
    await this.attach(loginScreenshot, 'image/png');
  }

});

When('enter a valid email and password', async function (this: MyWorld) {
  const { page } = this;
 
  await page?.locator(userLogin.emailField).fill(CommonMethods.email)
  await page?.locator(userLogin.passwordField).fill(CommonMethods.password)
  const credentialScreenshot = await this.page?.screenshot();
  if (credentialScreenshot) {
    await this.attach(credentialScreenshot, 'image/png');
  }

});
When('click on the Login button', async function () {
  const { page } = this;
  await page?.locator(userLogin.loginButton).click();
  await page?.waitForLoadState('networkidle');
  const loginButtonScreenshot = await this.page?.screenshot();
});
Then('User should be redirected to the homepage', async function () {
  const { page } = this;
  await expect(page).toHaveURL(testConfig.SI_URL);
  await page?.locator(userLogin.NopCommerceLogo).isVisible();
  const homeScreenshot = await this.page?.screenshot();
});
Then('User should able to logout', async function () {
  const { page } = this;
  await page?.locator(userLogin.logoutButton).click();
  await page?.waitForLoadState('networkidle');
  const logoutScreenshot = await this.page?.screenshot();
});

When('enter a valid email and invalid password', async function () {
  const { page } = this;
  await page?.locator(userLogin.emailField).fill(CommonMethods.email)
  await page?.locator(userLogin.passwordField).fill(CommonMethods.password)
  const credentialScreenshot = await this.page?.screenshot();
  if (credentialScreenshot) {
    await this.attach(credentialScreenshot, 'image/png');
  }
});
Then('User should Error message for invalid credentials', async function () {
  const { page } = this;
  const LoginErrorMessageText = userLogin.LoginErrorMessage
    await (LoginErrorMessageText.includes('Login was unsuccessful. Please correct the errors and try again.'));
  
});