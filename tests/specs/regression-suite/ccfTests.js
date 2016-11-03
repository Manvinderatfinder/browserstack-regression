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
     assert(result.isVisible()===false);
 });
});


describe('CCF commentary box', function() {
    before(function(done) {
        browser
            .url('http://www.creditcardfinder.com.au/business-credit-cards')
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should collapse Hide info', function() {
        browser
        .click('.latest-commentary__trigger')
        var hide = browser.isExisting('.latest-commentary__content');
        assert(hide, false);
    });
    
});



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



describe('Test for an existing user signup', function() {
 it('should display error message for an existing user', function () {
   browser
            .url('https://www.finder.com.au/credit-score')
            .setValue('*[name="emailAddress"]','tester1@hiveempire.com')
            .setValue('*[name="password"]','test123#')
            .click('.credit-check-sign-up__submit')
        .pause(1000)
         browser
     var result = browser.getText('.form__group.is_invalid > .form__error');
      assert(result, 'The email address already exists');
    });
});



describe('CCF commentary box', function() {
    before(function(done) {
        browser
            .url('https://www.finder.com.au/home-loans')
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should collapse Hide info', function() {
        browser
        .scroll(0,650)
        .click('.latest-commentary__trigger')
        var hide = browser.isExisting('.latest-commentary__content');
        assert(hide, false);
    });
});



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


describe('Foreign exchange table', function() {
 it('should check FMT table', function () {
    browser
            // open foreign exchange page   
            .url('https://www.finder.com.au/foreign-exchange')
            // scroll down by 650px to reveal the form
            .scroll(0, 650)
            //click on 'More' link from first row of the table. tr:nth-child(1) is used to select the first row
            .click('tr:nth-child(1) .btn-more-link')
            //wait for page to load when 'More' link is clicked in the table
            .pause(3000);
    browser
      var result = browser.element('#right-sidebar');
        console.log(result);
        assert(result.isVisible()===true);
    });
});


describe('Foreign exchange table', function() {
    it('should check FMT table', function() {
        browser
        // open foreign exchange page   
            .url('https://www.finder.com.au/personal-loans')
            // scroll down by 650px to reveal the form
            .scroll(0, 650)
            .setValue('#amount', '9000')
            .click('#years');
        browser
            .click('.form-widget--calculator > .btn.btn-secondary')
            .pause(3000);
        browser
        var result = browser.element('.defaultTable.plf tr:nth-child(2) .calculator-data');
        console.log(result);
        assert(result.isVisible() === true);
    });
});


describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/anz-first-credit-card.html')
     .scroll(0, 600)
     .click('a=Application Requirements')
     .click('a=Fees & Repayments')
     .click('a=Pros & Cons')
     .pause(1000);
   browser
     var result = browser.element('.f_container_proscons');
     console.log(result);
     assert(result.isVisible()===true);
 });
});


describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/frequent-flyer-credit-cards')
     .pause(3000);
    browser
     .scroll(0, 750);
    browser
     .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
     .pause(1000);
   browser
     var result = browser.element('.sub-menu');
     console.log(result);
     assert(result.isVisible()===false);
 });
});

describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/how-does-a-balance-transfer-help-save-money.html')
     .pause(3000);
    browser
     .scroll(0, 550);
    browser
     .click('.js-oneuser-bt-createuser')
     .pause(1000);
     browser
     .click('a=Log in here')
     .pause(1000);
     browser
     .setValue('*[name="email_address"]','tester1@hiveempire.com')
     .setValue('*[name="password"]','tester1')
     .click('.js-oneuser-bt-login .btn.btn-secondary')
     .pause(3000);
    browser
     var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
     console.log(result);
     assert(result.isVisible()===true);
 });
});



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





    describe('CCF commentary box', function() {
   it('should collapse Hide info', function() {
        browser
        .url('https://www.finder.com.au/loans-com-au-essentials-home-loan')
        .scroll(0,750)
        .pause(1000);
        var result = browser.element('#summary-belt');
     console.log(result);
     assert(result.isVisible()===false);
 
    });
});




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




describe('BT calculator widget', function() {
 it('should caclulate interest saved through BT widget', function () {
   browser
            .url('http://www.creditcardfinder.com.au/frequent-flyer-credit-cards')
            .pause(3000)
            .scroll(0, 750)
            .pause(1000)
            .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
        .pause(1000)
        var hide = browser.isExisting('.sub-menu');
        assert(hide, false);
    });
});



describe('Test for an existing user signup', function() {
 it('should display error message for an existing user', function () {
   browser
            .url('https://www.finder.com.au/credit-score')
            .setValue('*[name="emailAddress"]','tester1@hiveempire.com')
                    .pause(500);
        browser
            .setValue('*[name="password"]','test123')
            .click('.credit-check-sign-up__submit')
            .pause(1000);
         browser
     var result = browser.getText('.form__group.is_invalid > .form__error');
      assert(result, 'Your password is not secure enough');
    });
});



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
     assert(result.isVisible()===false);
 });
});


describe('CCF commentary box', function() {
    before(function(done) {
        browser
            .url('http://www.creditcardfinder.com.au/business-credit-cards')
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should collapse Hide info', function() {
        browser
        .click('.latest-commentary__trigger')
        var hide = browser.isExisting('.latest-commentary__content');
        assert(hide, false);
    });
    
});



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



describe('Test for an existing user signup', function() {
 it('should display error message for an existing user', function () {
   browser
            .url('https://www.finder.com.au/credit-score')
            .setValue('*[name="emailAddress"]','tester1@hiveempire.com')
            .setValue('*[name="password"]','test123#')
            .click('.credit-check-sign-up__submit')
        .pause(1000)
         browser
     var result = browser.getText('.form__group.is_invalid > .form__error');
      assert(result, 'The email address already exists');
    });
});



describe('CCF commentary box', function() {
    before(function(done) {
        browser
            .url('https://www.finder.com.au/home-loans')
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should collapse Hide info', function() {
        browser
        .scroll(0,650)
        .click('.latest-commentary__trigger')
        var hide = browser.isExisting('.latest-commentary__content');
        assert(hide, false);
    });
});



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


describe('Foreign exchange table', function() {
 it('should check FMT table', function () {
    browser
            // open foreign exchange page   
            .url('https://www.finder.com.au/foreign-exchange')
            // scroll down by 650px to reveal the form
            .scroll(0, 650)
            //click on 'More' link from first row of the table. tr:nth-child(1) is used to select the first row
            .click('tr:nth-child(1) .btn-more-link')
            //wait for page to load when 'More' link is clicked in the table
            .pause(3000);
    browser
      var result = browser.element('#right-sidebar');
        console.log(result);
        assert(result.isVisible()===true);
    });
});


describe('Foreign exchange table', function() {
    it('should check FMT table', function() {
        browser
        // open foreign exchange page   
            .url('https://www.finder.com.au/personal-loans')
            // scroll down by 650px to reveal the form
            .scroll(0, 650)
            .setValue('#amount', '9000')
            .click('#years');
        browser
            .click('.form-widget--calculator > .btn.btn-secondary')
            .pause(3000);
        browser
        var result = browser.element('.defaultTable.plf tr:nth-child(2) .calculator-data');
        console.log(result);
        assert(result.isVisible() === true);
    });
});


describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/anz-first-credit-card.html')
     .scroll(0, 600)
     .click('a=Application Requirements')
     .click('a=Fees & Repayments')
     .click('a=Pros & Cons')
     .pause(1000);
   browser
     var result = browser.element('.f_container_proscons');
     console.log(result);
     assert(result.isVisible()===true);
 });
});


describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/frequent-flyer-credit-cards')
     .pause(3000);
    browser
     .scroll(0, 750);
    browser
     .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
     .pause(1000);
   browser
     var result = browser.element('.sub-menu');
     console.log(result);
     assert(result.isVisible()===false);
 });
});

describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     .url('http://www.creditcardfinder.com.au/how-does-a-balance-transfer-help-save-money.html')
     .pause(3000);
    browser
     .scroll(0, 550);
    browser
     .click('.js-oneuser-bt-createuser')
     .pause(1000);
     browser
     .click('a=Log in here')
     .pause(1000);
     browser
     .setValue('*[name="email_address"]','tester1@hiveempire.com')
     .setValue('*[name="password"]','tester1')
     .click('.js-oneuser-bt-login .btn.btn-secondary')
     .pause(3000);
    browser
     var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
     console.log(result);
     assert(result.isVisible()===true);
 });
});



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





    describe('CCF commentary box', function() {
   it('should collapse Hide info', function() {
        browser
        .url('https://www.finder.com.au/loans-com-au-essentials-home-loan')
        .scroll(0,750)
        .pause(1000);
        var result = browser.element('#summary-belt');
     console.log(result);
     assert(result.isVisible()===false);
 
    });
});




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




describe('BT calculator widget', function() {
 it('should caclulate interest saved through BT widget', function () {
   browser
            .url('http://www.creditcardfinder.com.au/frequent-flyer-credit-cards')
            .pause(3000)
            .scroll(0, 750)
            .pause(1000)
            .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
        .pause(1000)
        var hide = browser.isExisting('.sub-menu');
        assert(hide, false);
    });
});



describe('Test for an existing user signup', function() {
 it('should display error message for an existing user', function () {
   browser
            .url('https://www.finder.com.au/credit-score')
            .setValue('*[name="emailAddress"]','tester1@hiveempire.com')
                    .pause(500);
        browser
            .setValue('*[name="password"]','test123')
            .click('.credit-check-sign-up__submit')
            .pause(1000);
         browser
     var result = browser.getText('.form__group.is_invalid > .form__error');
      assert(result, 'Your password is not secure enough');
    });
});

