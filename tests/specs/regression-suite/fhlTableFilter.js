var assert = require('assert');

describe('Home loan table filter', function() {
   it('should load table filters', function() {
        browser
        .url('https://www.finder.com.au/home-loans')
        .scroll(0,500)
        .click('.js-filter-button')
        .click('.icon-info-solid.fin-text-blue')
        .click('input[name="hl_product_mortgage_offset"][type="radio"][value="0"]')
        .click('input[name="hl_product_loan_type"][type="radio"][value="variable"]')
        .click('.js-filter-button');

        browser
        var result = browser.element('.form-widget--filter');
        console.log(result);
        assert(result.isVisible()===false);
   
    });
});