import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import UserRegistartion from '../pages/UserRegistrationPage';

const userReg = new UserRegistartion();

Given('User is on the registration page', async function () {
    const { page } = this;
    await page?.goto("https://demo.nopcommerce.com/")
    // await page?.goto("").catch((e) => {
    //    page?.goto("");
    //  });

    this.attach("Login page opened and Validated");
    await page?.locator(userReg.registrationPage).click();
    await page?.locator(userReg.registerText).isVisible(); ``
    //  await page?.waitForLoadState('networkidle');
    const loginScreenshot = await this.page?.screenshot();
    if (loginScreenshot) {
        await this.attach(loginScreenshot, 'image/png');
    }
});

When('Enter mandatory fields', async function () {
    const { page } = this;
    await page?.locator(userReg.genderselection).click();
    await page?.locator(userReg.firstName).fill("User")
    await page?.locator(userReg.lastName).fill("Test")
    await page?.locator(userReg.email).fill("User@gmail.com")
    await page?.locator(userReg.companyName).fill("XYZ")
    await page?.locator(userReg.password).fill("Tanu2460@-")
    await page?.locator(userReg.confirmPassword).fill("Tanu2460@-")
      const Regiscreenshot = await this.page?.screenshot();
    if (Regiscreenshot) {
        await this.attach(Regiscreenshot, 'image/png');
    }

});
When('click on the Register button', async function () {
   const { page } = this;
     await page?.locator(userReg.registerButton).click()
      const Regiscreenshot = await this.page?.screenshot();
    if (Regiscreenshot) {
        await this.attach(Regiscreenshot, 'image/png');
    }
});
Then('User should be registered successfully', async function () {
 const { page } = this;
 await page?.locator(userReg.registrationCompleteText).toContainText('Your registration completed') ;
   const Regiscreenshot = await this.page?.screenshot();
    if (Regiscreenshot) {
        await this.attach(Regiscreenshot, 'image/png');
    }
    await page?.locator(userReg.continueText).click();
});