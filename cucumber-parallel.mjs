import { world } from "@cucumber/cucumber";
import { tags } from "allure-js-commons";

const getWorldParams = () => {
    const params = {
        foo: 'bar'
    };
    return params;
}
export default {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    format: ['html:reports/cucumber-report.html',
        'json:reports/cucumber-report.json',
        'summary',
        'progress-bar',
        '@cucumber/pretty-formatter',
    ],
    formatOptions: { snippetInterfarece: 'async-await' },
    worldParameters: getWorldParams(),
    publishQuiet: true,
    parallel: 4,
    retry: 1,
    retryTagFilter: '@flaky',
    tags: '@registration or @api',
};