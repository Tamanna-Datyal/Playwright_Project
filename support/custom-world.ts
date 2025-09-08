import { setWorldConstructor, World , IWorldOptions } from "@cucumber/cucumber";
import *as messages from "@cucumber/messages";
import { Browser, BrowserContext, chromium, Page } from "playwright";
//import { AxiosInstance } from "axios";
export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;
  testName?: string;
  startTime?: Date;
  // server?: AxiosInstance;
  // playwrightOptions?: PlaywrightTestOptions;
}

export class CustomWorld extends World implements ICustomWorld {
  debug: boolean = false;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;
  testName?: string;
  startTime?: Date;

  constructor(options: IWorldOptions) {
    super(options);
    this.debug = false;
  }

  async initBrowser() {
    this.context = await chromium.launch({ headless: false }).then(browser => browser.newContext());
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page?.close();
    await this.context?.close();
  }
}

setWorldConstructor(CustomWorld);