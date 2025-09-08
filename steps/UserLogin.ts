import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import UserLoginPage from '../pages/UserLoginPage';

const userLogin = new UserLoginPage();

Given('User is on the login page', async function () {
  const { page } = this;
  await page?.goto("https://demo.nopcommerce.com/")
  // await page?.goto("").catch((e) => {
  //    page?.goto("");
  //  });

  this.attach("Login page opened and Validated");
  await page?.locator(userLogin.loginPage).click();
  await page?.locator(userLogin.SignText).isVisible(); ``
//  await page?.waitForLoadState('networkidle');
  const loginScreenshot = await this.page?.screenshot();
  if (loginScreenshot) {
    await this.attach(loginScreenshot, 'image/png');
  }

});

When('enter a valid email and password', async function () {
  const { page } = this;
  await page?.locator(userLogin.emailField).fill("User@gmail.com")
  await page?.locator(userLogin.passwordField).fill("Tanu2460@-")
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
  await expect(page).toHaveURL("https://demo.nopcommerce.com/");
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
  await page?.locator(userLogin.emailField).fill("User@gmail.com")
  await page?.locator(userLogin.passwordField).fill("Tanu2460@_")
  const credentialScreenshot = await this.page?.screenshot();
  if (credentialScreenshot) {
    await this.attach(credentialScreenshot, 'image/png');
  }
});
Then('User should Error message for invalid credentials', async function () {
  const { page } = this;
  await expect(page.locator(userLogin.LoginErrorMessage)).toContainText('Login was unsuccessful. Please correct the errors and try again.');
});