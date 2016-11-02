var assert = require('assert');
describe('Service info tooltip', function() {
 it('should display service tooltip content', function () {
   browser
     .url('http://www.creditcardfinder.com.au')
     .click('#menu-item-81553 > span.menu-element > span.menu-toggle.menu-expand')
     .pause(1000);
   browser
      .click('#menu-item-81553 > span.menu-element > span.menu-toggle')
      .pause(1000); 
   browser
     var result = browser.element('.sub-menu');
     console.log(result);
     assert(result.isVisible()===false);
 });
});