var assert = require('assert');

/* 
   -------------------------------
   Test for FIN hp BT calculator
   -------------------------------
*/

describe('FIN hp BT calcultor', function() {
 it('should calculate interest saved ', function () {
   browser
            //open FIN homepage
            .url('https://www.finder.com.au')
            //click on credit cards tab
            .click('.homepage__masthead a[href="#panel-credit-cards"]')
            //click on BT icon
            .click('i.hp-icon-balance-transfer');
   browser
            //enter value for amount
            .setValue('*[name="ccf_balance_to_transfer"]','25000')
            //enter interest rate
            .setValue('*[name="ccf_current_int_rate"]','13.25')
            //click on show cards button
            .click('input.btn.btn-secondary');
                    
        
         browser
         // check if interest saved amount is showing
     var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
     console.log(result);
     assert(result.isVisible()==false);
    });
});// end describe


/* 
   -----------------------
   Test for BT calculator
   -----------------------
*/

describe('BT calculator widget', function() {
 it('should caclulate interest saved through BT widget', function () {
 	//set browser dimensions to reveal BT calculator
   browser
     .setViewportSize({
       width: 1500,
       height: 768
     });
   browser
   // open BT page
     .url('http://www.creditcardfinder.com.au/29-for-12-month-balance-transfer-offers')
     // enter amount
     .setValue('*[name="ccf_balance_to_transfer"]','6000')
     //enter interest rate
     .setValue('*[name="ccf_current_int_rate"]','11.39');
   browser
     //click on calculate button
     .click('.btn.btn-secondary')
   browser
     // check if interest saved amount is showing
     var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
     console.log(result);
     assert(result.isVisible()===false);
 });
});// end describe



/* 
   ---------------------------
   Test for CCF commentary box
   ---------------------------
*/

describe('CCF commentary box', function() {
    before(function(done) {
    	browser
    	//open page having commentary box
        .url('http://www.creditcardfinder.com.au/business-credit-cards')
        //wait for commentary box to appear
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should show content of commentary box', function() {
        browser
        //click on commentary box to ecpand
        .click('.latest-commentary__trigger')
        // check if commentary box content is showing
        var hide = browser.isExisting('.latest-commentary__content');
        assert(hide, false);
    });
    
});


/* 
   -------------------------
   Test for CCF hp dropdown 
   -------------------------
*/

describe('CCF hp dropdown', function() {
 it('should load CCF ho dropdown', function () {
   
   browser
     // open CCF hp
     .url('http://www.creditcardfinder.com.au')
     //click on CCF hp dropdown and wait for dropdown content to load
     .click('.select-nav__trigger.js-select-nav__trigger')
     .pause(1000);

   browser
     // check if content of dropdown is showing
     var result = browser.getText('.select-nav.one_half');
      assert(result, 'I want to:');
 });
});// end describe


/* 
   -----------------------------------
   Test for credit score exixting user 
   -----------------------------------
*/

describe('Test for an existing user signup', function() {
 it('should display error message for an existing user', function () {
   browser
            //open credit score page
            .url('https://www.finder.com.au/credit-score')
            .pause(2000);
    browser        
            // enter existing user email id
            .setValue('*[name="emailAddress"]','tester1@hiveempire.com')
            //enter existing user password
            .setValue('*[name="password"]','test123#')
            .click('.credit-check-sign-up__submit')
        .pause(1000);
         browser
         // check if it do not allow existing to signup and load error message
     var result = browser.getText('.form__group.is_invalid > .form__error');
      assert(result, 'The email address already exists');
    });
});// end describe


/* 
   ----------------------------
   Test for FHL commentary box 
   ----------------------------
*/

describe('FHL commentary box', function() {
    before(function(done) {
        browser
            // open FHL homepage
            .url('https://www.finder.com.au/home-loans')
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should show content of commentary box', function() {
        browser
        // scroll by 650px to show comentary box on the screen
        .scroll(0,650)
        //click on commentary box and expand its content
        .click('.latest-commentary__trigger')
        //check if content of commentary box is showing
        var hide = browser.isExisting('.latest-commentary__content');
        assert(hide, false);
    });
});// end describe


/* 
   ----------------------------
   Test for FHL table filter
   ----------------------------
*/

describe('Home loan table filter', function() {
   it('should load table filters', function() {
        browser
        //open FHL homepage
        .url('https://www.finder.com.au/home-loans')
        //scroll by 500px to show table filter in the screen
        .scroll(0,500)
        //click on advance search button
        .click('.js-filter-button')
        //click on tooptip icon
        .click('.icon-info-solid.fin-text-blue')
        //select input for offset account
        .click('input[name="hl_product_mortgage_offset"][type="radio"][value="0"]')
        //select input for loan type
        .click('input[name="hl_product_loan_type"][type="radio"][value="variable"]')
        //clck on Advance filter button to hide table filter
        .click('.js-filter-button');
        browser
        // check in table filter content is hiding
        var result = browser.element('.form-widget--filter');
        console.log(result);
        assert(result.isVisible()===true);
   
    });
});//end describe


/* 
   --------------------------------
   Test for Foreign exchange table
   --------------------------------
*/

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
      //check if sidebar is showing
      var result = browser.element('#right-sidebar');
        console.log(result);
        assert(result.isVisible()===true);
    });
});//end describe


/* 
   ------------------------------
   Test for FPL table calculator
   ------------------------------
*/

describe('FPL table calculator', function() {
    it('should load FPL table calculator', function() {
        browser
            // open FPL page   
            .url('https://www.finder.com.au/personal-loans')
            // scroll down by 650px to reveal the calculator
            .scroll(0, 650)
            //enter amount
            .setValue('#amount', '9000')
            //enter years
            .click('#years');
        browser
            //click on calculate button
            .click('.form-widget--calculator > .btn.btn-secondary')
            //wait for 3 sec to appear interet saved
            .pause(3000);
        browser
        //check if interest saved is showing
        var result = browser.element('.defaultTable.plf tr:nth-child(2) .calculator-data');
        console.log(result);
        assert(result.isVisible() === true);
    });
});//end describe


/* 
   ---------------------------------
   Test for CCF review page infobox
   ---------------------------------
*/
describe('Reviw page infobox', function() {
 it('should load review page infobox content', function () {
    browser
     //load CCF review page
     .url('http://www.creditcardfinder.com.au/anz-first-credit-card.html')
     //scroll by 600px to show infobox in the screen
     .scroll(0, 600)
     //click on application tab
     .click('a=Application Requirements')
     //click on fee and repayment tab
     .click('a=Fees & Repayments')
     //click on pros&cons tab
     .click('a=Pros & Cons')
     .pause(1000);
   browser
    //check if content of selected tab is showing
     var result = browser.element('.f_container_proscons');
     console.log(result);
     assert(result.isVisible()===true);
 });
});//end describe


/* 
   ---------------------------------
   Test for CCF table tooltip
   ---------------------------------
*/
describe('CCF table tooltip', function() {
 it('should CCF table tooltip content', function () {
    browser
     //open table having tooltip
     .url('http://www.creditcardfinder.com.au/frequent-flyer-credit-cards')
     .pause(3000);
    browser
     //scroll by 750px to show table tooltip
     .scroll(0, 750);
    browser
     //click on tooltip in the first table row
     .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
     //wait for tooltip content to show
     .pause(1000);
   browser
     // check if tooltip content is showing
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
     assert(result.isVisible()===true);
 
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
            .pause(3000);
    browser        
            .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
        .pause(1000);
    browser
        var hide = browser.isExisting('.sub-menu');
        assert(hide, false);
    });
});






