exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'manvinderverma1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'PMM7UxGeAiQozg5aCWia',

  updateJob: false,
  specs: [
    './tests/specs/regression-suite/ste.js'
  ],
  exclude: [],

  capabilities: [{
    os: 'OS X',
    platform: 'MAC',
    os_version: 'El Capitan',
    browserName: 'chrome',
    version: 56,
      chromeOptions: {
        prefs: {
          'profile.password_manager_enabled': false,
          'credentials_enable_service': false,
          'password_manager_enabled': false
        }
      },
    name: 'regression_test',
    build: 'webdriver-browserstack',
    resolution: '1920x1080'
  }],

  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'https://www.finder.com.au',
  waitforTimeout: 30000,
  connectionRetryTimeout: 720000,
  connectionRetryCount: 5,

  reporters: ['dot', 'spec'],

  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 9999999
  },

  // Code to set browser size
  beforeHook: function (capabilties, specs) {
    browser
      .windowHandlePosition({x: 0, y: 0})
      .windowHandleSize({ width: 1920, height: 1080 })
    browser
      .url('/')
    browser
      .waitForVisible('html.js');
    browser
      .execute(function(){
        return document.cookie="geoip_checked_au=true";
      });
  },

  after: function (capabilities, specs) {
    browser.deleteCookie();
  }
}
