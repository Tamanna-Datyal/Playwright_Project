import {AllureRuntime, CucumberJSAllureFormatter} from 'allure-cucumberjs8';

function Reporter(options: any) {
    return new CucumberJSAllureFormatter(
        options,
    new AllureRuntime({resultsDir: './reports/allure-results'}),
    {
        labels: {
            epic: [/features:(.*)/],
            severity: [/@severity:(.*)/],
        },
        links: {
            issue:
            {
                pattern:[/@issue:(.*)/],
                urlTemplate: 'http://my.issuetracker.com/{}',
            } ,
            
        }
    });
}
    
Reporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
Reporter.prototype.constructor = Reporter;
exports.default = Reporter;