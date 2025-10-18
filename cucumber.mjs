const getWorldParams = () => {
    const params = {
        foo: 'bar'
    };
    return params;
}
export default {
    requireModule: ['ts-node/register'],
    require: ['./steps/*.ts', 
        './support/Reporters/*.ts'],
    paths: ['./features/*.feature'],
    format: [
    'json:reports/cucumber_report.json',
    'html:reports/Testing_report.html',
    'summary',
    'progress-bar',
    '@cucumber/pretty-formatter',
    'allure-cucumberjs/reporter'
  ],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true,
    worldParameters: getWorldParams()
};