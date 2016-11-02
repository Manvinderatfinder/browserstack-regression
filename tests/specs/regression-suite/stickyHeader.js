var assert = require('assert');
describe('Sticky header in a review page', function() {
 it('should load sticky header in review page', function () {
   browser
     .url('https://www.finder.com.au/loans-com-au-essentials-home-loan')
     .scroll(0,700)
     .pause(3000);
   browser
     var result = browser.element('.sticky-header');
     console.log(result);
     assert(result.isVisible()===true);
 });
});