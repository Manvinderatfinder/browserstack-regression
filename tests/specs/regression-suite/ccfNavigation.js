var assert = require('assert');
describe('Google\'s Search Functionality', function() {
 it('can find search results for non ncr', function () {
   browser
     .setViewportSize({
       width: 1500,
       height: 768
     });
   browser
     .url('http://www.creditcardfinder.com.au')
     .click('.select-nav__trigger.js-select-nav__trigger')
     .pause(1000);
   browser
     .click('.btn.btn-secondary')
   browser
     var result = browser.getText('.select-nav.one_half');
      assert(result, 'I want to:');
 });
});

 