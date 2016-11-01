var assert = require('assert');
describe('Test for an existing user signup', function() {
 it('should display error message for an existing user', function () {
   browser
            .url('https://www.finder.com.au')
            .click('.homepage__masthead a[href="#panel-credit-cards"]')
            .click('i.hp-icon-balance-transfer');
   browser
            .setValue('*[name="ccf_balance_to_transfer"]','25000')
            .setValue('*[name="ccf_current_int_rate"]','13.25')
            .click('input.btn.btn-secondary');
                    
        
         browser
     var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
     console.log(result);
     assert(result.isVisible()===true);
    });
});





    