var assert = require('assert');

describe('Google\'s Search Functionality', function() {
  it('can find search results', function () {
    browser
      .url('http://www.creditcardfinder.com.au/0-for-6-month-balance-transfer-offers')
      .setValue('*[name="ccf_balance_to_transfer"]','6000')
      .setValue('*[name="ccf_current_int_rate"]','11.35')
      .click('.balanceTransferTable .btn.btn-secondary')
      .pause(5000);
                
    assert(browser.getTitle().match(/Need a 0 balance transfer card? Get 0% up to 18 mths | finder.com.au/i));

  });
});
