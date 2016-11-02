var assert = require('assert');
describe('Service info tooltip', function() {
 it('should display service tooltip content', function () {
   browser
     .setViewportSize({
       width: 1500,
       height: 768
     });
   browser
     .url('http://www.creditcardfinder.com.au')
     .click('a=Learn about our information service')
     .pause(1000);
   browser
     .click('.modal-header > button.close');  
   browser
     var result = browser.element('.modal-body');
     console.log(result);
     assert(result.isVisible()===false);
 });
});