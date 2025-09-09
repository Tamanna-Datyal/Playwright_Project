import { setWorldConstructor, IWorldOptions, World, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";

setDefaultTimeout(60 * 1000); // 60 seconds timeout

export class MyWorld extends World {
  browser!: Browser;
  page!: Page;
  email?: string;
  password?: string;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async openBrowser() {
    this.browser = await chromium.launch({ headless: false }); // headless:true for CI
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(MyWorld);