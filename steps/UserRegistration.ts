import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import UserRegistartion from '../pages/UserRegistrationPage';
import { CommonMethods } from "../utils/CommonMethods";
import { testConfig } from '../support/Reporters/testConfig';
import { MyWorld } from "../support/Reporters/world";

const userReg = new UserRegistartion();


Given('User is on the registration page', async function () {
    const { page } = this;
    await page?.goto(testConfig.SI_URL)
    this.attach("Login page opened and Validated");
    await page?.locator(userReg.registrationPage).click();
    await page?.locator(userReg.registerText).isVisible(); 
    //  await page?.waitForLoadState('networkidle');
    const loginScreenshot = await this.page?.screenshot();
    if (loginScreenshot) {
        await this.attach(loginScreenshot, 'image/png');
    }
});

When('Enter mandatory fields', async function (this: MyWorld) {
    const { page } = this;
     
    await page?.locator(userReg.genderselection).click();
    await page?.locator(userReg.firstName).fill(testConfig.firstname)
    await page?.locator(userReg.lastName).fill(testConfig.lastname)
    await page?.locator(userReg.email).fill(CommonMethods.email)
    await page?.locator(userReg.companyName).fill(testConfig.companyname)
    await page?.locator(userReg.password).fill(CommonMethods.password)
    await page?.locator(userReg.confirmPassword).fill(CommonMethods.password)
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
    const UserRegistartionText = userReg.registrationCompleteText
    await (UserRegistartionText.includes('Your registration completed'));
    const Regiscreenshot = await this.page?.screenshot();
    if (Regiscreenshot) {
        await this.attach(Regiscreenshot, 'image/png');
    }
    await page?.locator(userReg.continueText).click();
});