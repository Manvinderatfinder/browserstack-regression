var assert = require('assert');
describe('Refinance calculator widget', function() {
 it('should calculate refinance monthly repayment', function () {
   browser
        .url('https://www.finder.com.au/home-loans/refinancing-home-loans')
        .setValue('*[name="amount"]','500000')
        .setValue('*[name="current_interest_rate"]','4.75')
       // .click('input[name="years"][value="30 years"]')
        .pause(2000);
        browser
        .click('.js-filter-button')
        .scroll(0,650)
        .click('input[name="hl_product_mortgage_offset"][type="radio"][value="1"]')
    
        .click('input[name="hl_product_split"][type="radio"][value="1"]')
        .click('input[name="hl_product_loan_type"][type="radio"][value="fixed"]')
        .pause(2000);



   browser
        var result = browser.element('.refinancingTable.hlf tbody tr:first-child .calculator-data.string-bottom');
        console.log(result);
        assert(result.isVisible()===true);
    });
});





    