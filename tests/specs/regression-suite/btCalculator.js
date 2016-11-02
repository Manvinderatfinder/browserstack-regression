var assert = require('assert');
describe('BT calculator widget', function() {
 it('should caclulate interest saved through BT widget', function () {
   browser
     .setViewportSize({
       width: 1500,
       height: 768
     });
   browser
     .url('http://www.creditcardfinder.com.au/29-for-12-month-balance-transfer-offers')
     .setValue('*[name="ccf_balance_to_transfer"]','6000')
     .setValue('*[name="ccf_current_int_rate"]','11.39');
   browser
     .click('.btn.btn-secondary')
   browser
     var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
     console.log(result);
     assert(result.isVisible()===true);
 });
});