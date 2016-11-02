var assert = require('assert');
describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/anz-first-credit-card.html')
     .scroll(0, 600)
     .click('a=Application Requirements')
     .click('a=Fees & Repayments')
     .click('a=Pros & Cons')
     .pause(1000);
   browser
     var result = browser.element('.f_container_proscons');
     console.log(result);
     assert(result.isVisible()===true);
 });
});