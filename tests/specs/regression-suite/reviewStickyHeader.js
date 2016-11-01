var assert = require('assert');

describe('CCF commentary box', function() {
   it('should collapse Hide info', function() {
        browser
        .url('https://www.finder.com.au/loans-com-au-essentials-home-loan')
        .scroll(0,750)
        .pause(1000);
        var result = browser.element('#summary-belt');
     console.log(result);
     assert(result.isVisible()===true);
 
    });
});