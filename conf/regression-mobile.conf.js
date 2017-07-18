exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'manvinderverma1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'PMM7UxGeAiQozg5aCWia',

  updateJob: false,
  specs: [
    './tests/specs/mobile-test/*.js'
  ],
  exclude: [],

  capabilities: [{
  'browserName': 'iPhone',
  'platform': 'MAC',
  'device': 'iPhone 6',
  name: 'regression_mobile_test',
  build: 'webdriver-browserstack'
}],

  logLevel: 'silent',
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

  beforeHook: function (capabilties, specs) {
    browser
      .url('/')
    browser
      .waitForVisible('html.js');
    browser
      .execute(function(){
        return document.cookie="geoip_checked_au=true";
      });
  }

};
