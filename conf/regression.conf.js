exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'manvinderverma1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'PMM7UxGeAiQozg5aCWia',

  updateJob: false,
  specs: [
    './tests/specs/regression-suite/*.js'
  ],
  exclude: [],

  capabilities: [{
    os: 'OS X',
    os_version: 'El Capitan',
    browser: 'chrome',
    name: 'regression_test',
    build: 'webdriver-browserstack',
    resolution: '1920x1080'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'https://www.finder.com.au',
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  reporters: ['dot', 'spec'],

  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 9999999
  },

  // Code to set browser size
  before: function (capabilties, specs) {
    browser
      .setViewportSize({
        width: 1500,
        height: 768
      });
  }
}
