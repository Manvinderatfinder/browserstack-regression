exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'manvinderatfinde1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'AtYbSCsQujdwqXpbwYZc',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'single_test',
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
