import { bbrowserOptions } from "./config";
import { ICustomWorld } from "../custom-world";
import {

    Before,
    After,
    BeforeAll,
    AfterAll,
    AfterStep,
    Status,
    setDefaultTimeout,
} from "@cucumber/cucumber";
import {
    chromium,
    ChromiumBrowser,
    firefox,
    FirefoxBrowser,
    webkit,
    WebKitBrowser,
} from "playwright";

setDefaultTimeout(60 * 1000);
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
console.log("Common hooks file loaded");
var browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
declare global {
    var browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
}
setDefaultTimeout(process.env.DEBUG ? -1 : -1);

BeforeAll(async function () {
    switch (process.env.BROWSER) {
        case "firefox":
            browser = await firefox.launch(bbrowserOptions);
            break;
        case "webkit":
            browser = await webkit.launch(bbrowserOptions);
            break;
        default:
            browser = await chromium.launch(bbrowserOptions)
    }
});

Before({ tags: "@ignore" }, async function () {
    return "skipped" as any;
});
Before({ tags: "@debug" }, async function (this: ICustomWorld) {
    this.debug = true;
    setDefaultTimeout(-1);
});

Before(async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
    var v = await browser?.newContext({
        acceptDownloads: true,
        ignoreHTTPSErrors: true,
        viewport: null,
        recordVideo: {
            dir: "videos/",

        }
    });
    this.context = v;
     await this.context.tracing.start({ screenshots: true, snapshots: true });
    this.page = await this.context.newPage();
    this.page?.on("console", async (msg) => {
        if (msg.type() === 'log' && msg.text().includes('Error')) {
            console.log(`Console Error: ${msg.text(), "text/plain"}`);
        }
    });
    this.feature = pickle
    
});

AfterStep(async function (this: ICustomWorld) {

    if (this.page) {
        const image = await this.page.screenshot();
        await this.attach(image, 'image/png');
    }
});
After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
    if (result) {
        await this.attach(
            'Status: ${result.status}', 'text/plain'
        );
        if (result.status !== Status.PASSED) {
            const image = await this.page?.screenshot({ path: `./reports/screenshots/${this.testName?.replace(/[^a-zA-Z0-9]/g, '_')}.png`, type: 'png', fullPage: true });
            image && (await this.attach(image, 'image/png'));
        }
    }
    await this.page?.waitForLoadState("load")
    this.page?.setDefaultTimeout(19000)
     if (this.context) {
        await this.context.tracing.stop({ path: `./traces/trace-${Date.now()}.zip` });
    }
    await this.page?.close();
    await this.context?.close()

})

AfterAll(async function () {
    await browser?.close();
});