import { LaunchOptions } from "@playwright/test";
import { expect, PlaywrightTestConfig } from "@playwright/test";
import playwrightApiMatchers from 'odottaa';
export const bbrowserOptions: LaunchOptions = {
    slowMo: 1200,
    headless: false,
    channel: 'chromium',


    args: ['--start-maximized',
        "--uise-fake-ui-for-media-stream",
        "--use-fake-device-for-media-stream",
    ],
    firefoxUserPrefs: {
        "media.navigator.streams.fake": true,
        "media.navigator.permission.disabled": true,
    }

};
expect.extend(playwrightApiMatchers);
const config: PlaywrightTestConfig = {
    reporter: [['html', { open: 'never' }]],
    globalSetup: './support/Reporters/global-setup',
    webServer: {
        command: 'npx allure generate ./reports/allure-results --clean -o ./reports/allure-report',
        timeout: 20000,
        url: 'http://localhost:3000',
        reuseExistingServer: true
    },
    use: {
         trace: 'on',
    }
};

export default config;