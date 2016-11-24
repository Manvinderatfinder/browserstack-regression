var assert = require('assert');

describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', function () {
    browser
      .url('http://fin.dev');
    var banner = browser.getText('.sitewide-banner__content');
      console.log(banner);
  });
});
