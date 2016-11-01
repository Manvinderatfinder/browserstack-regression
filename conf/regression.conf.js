exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'manvinderatfinde1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'AtYbSCsQujdwqXpbwYZc',

  updateJob: false,
  specs: [
    './tests/specs/regression-suite/*.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    os: 'OS X',
    os_version: 'El Capitan',
    name: 'Regression suite',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: ['dot', 'spec'],
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 9999999
  }
}
