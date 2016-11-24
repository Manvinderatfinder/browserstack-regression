exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'manvinderverma1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'PMM7UxGeAiQozg5aCWia',

  updateJob: false,
  specs: [
    './tests/specs/regression-suite/*.js'
  ],
  exclude: [],

  capabilities: [{
    'browserName' : 'iPhone',
    'platform' : 'MAC',
    'device' : 'iPhone 6S Plus',
    name: 'mobile_tests',
    build: 'webdriver-browserstack'
    
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  
  reporters: ['dot', 'spec'],

  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 9999999
  }

  }

