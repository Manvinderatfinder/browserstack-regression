exports.config = {
user: process.env.BROWSERSTACK_USERNAME || 'manvinderverma1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'PMM7UxGeAiQozg5aCWia',

  updateJob: false,
  specs: [
    './tests/specs/regression-suite/*.js' 
    ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'multiple_test',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
