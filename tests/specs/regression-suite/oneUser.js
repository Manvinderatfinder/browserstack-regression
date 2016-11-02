var assert = require('assert');
describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/how-does-a-balance-transfer-help-save-money.html')
     .pause(3000);
    browser
     .scroll(0, 550);
    browser
     .click('.js-oneuser-bt-createuser')
     .pause(1000);
     browser
     .click('a=Log in here')
     .pause(1000);
     browser
     .setValue('*[name="email_address"]','tester1@hiveempire.com')
     .setValue('*[name="password"]','tester1')
     .click('.js-oneuser-bt-login .btn.btn-secondary')
     .pause(3000);
    browser
     var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
     console.log(result);
     assert(result.isVisible()===true);
 });
});