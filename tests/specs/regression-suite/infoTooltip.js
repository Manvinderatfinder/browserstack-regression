var assert = require('assert');
describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/frequent-flyer-credit-cards')
     .pause(3000);
    browser
     .scroll(0, 750);
    browser
     .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
     .pause(1000);
   browser
     var result = browser.element('.sub-menu');
     console.log(result);
     assert(result.isVisible()===false);
 });
});