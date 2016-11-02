var assert = require('assert');
describe('BT calculator widget', function() {
 it('should caclulate interest saved through BT widget', function () {
   browser
     .setViewportSize({
       width: 1500,
       height: 768
     });
   browser
     .url('http://www.creditcardfinder.com.au/0-purchase-credit-cards')
     .setValue('*[name="monthly_spend"]','3000');
   browser
     .click('.form-widget--calculator > .btn.btn-secondary');
   browser
     var result = browser.element('.zeroPercentPurchase.ccf.calculator tbody .calculator-data.string-bottom');
     console.log(result);
     assert(result.isVisible()===true);
 });
});