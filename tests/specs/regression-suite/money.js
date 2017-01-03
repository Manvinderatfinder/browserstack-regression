var assert = require('assert');

/*
     ---------------------------
     Test for FIN hp widget
     ---------------------------
  */

describe('FIN hp widget', function() {

    // test for home loan calculator
    it('should calculate interest saved for home loan calculator', function() {
        browser
            // open FIN hp
            .url('/')
            .click('.homepage__masthead a[href="#panel-loans"]')
            //click on home loan icon
            .click('i.hp-icon-home-loans');
        browser
            //enter value for amount
            .click('select.form__select.js-switch-action > option:nth-child(2)')
            .setValue('*[name="calc_amount"]', '500000')
            //enter interest rate
            .click('[name ="calc_period"] option[value="60"]')
            //click on show cards button
            .click('#panel-hl input[value="Get started"]')
            // wait for FHL table calculator to appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        // check if amount showing in table is equal to the amount entered in FIN hp field
        var value = browser.getValue('[name="hlPrincipal"]');
        assert(value, '500000');
    });

    // test for perosnal loan calculator
    it('should calculate interest saved for personal loan calculator', function() {
        browser
            // open FIN hp
            .url('/')
            // click on loans tab
            .click('.homepage__masthead a[href="#panel-loans"]')
            //click on personal loan icon
            .click('#panel-loans i.hp-icon-personal-loans')
            //enter value for amount
            .setValue('#panel-pl #amount', '8000')
            //enter interest rate
            .click('#panel-pl #years > option:nth-child(5)')
            //click on show cards button
            .click('#panel-pl input[value="Get started"]')
            // wait for FPL table calculator to appear
            .waitForVisible('.defaultTable.plf tr:nth-child(2) .calculator-data');
        // check if amount showing in table is equal to the amount entered in FIN hp field
        var value = browser.getValue('#amount');
        assert(value, '8000');
    });

    // test for car loan calculator
    it('should calculate interest saved for car loan calculator', function() {
        browser
            // open FIN hp
            .url('/')
            // click on loans tab
            .click('.homepage__masthead a[href="#panel-loans"]')
            //click on car loan icon
            .click('#panel-loans i.hp-icon-car-loans')
            //enter value for amount
            .setValue('#panel-cl #amount', '15000')
            //enter interest rate
            .click('#panel-cl #years > option:nth-child(5)')
            //click on show cards button
            //click on show cards button
            .click('#panel-cl input[value="Get started"]')
            // wait for FCL table calculator to appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(2) .string-bottom');
        // check if amount showing in table is equal to the amount entered in FIN hp field
        var value = browser.getValue('#amount');
        assert(value, '15000');
    });

    //test for BT calculator
    it('should calculate interest saved for BT calculator', function() {
        browser
            // open FIN hp
            .url('/')
            //click on BT icon
            .click('i.hp-icon-balance-transfer');
        browser
            //enter value for amount
            .setValue('*[name="ccf_balance_to_transfer"]', '25000')
            //enter interest rate
            .setValue('*[name="ccf_current_int_rate"]', '13.25')
            //click on show cards button
            .click('input.btn.btn-secondary')
            // wait for BT table to appear
            .waitForVisible('.balanceTransferTable.calculator');
        // check if amount showing in table is equal to the amount entered in FIN hp field
        var value = browser.getValue('[name="ccf_balance_to_transfer"]');
        assert(value, '25000');
    });

    //test for search box
    it('should search for a keyword entered in the searchox', function() {
        browser
            // open FIN hp
            .url('/')
        browser
            // click on search icon  in hp widget
            .click('.homepage__masthead a[href="#panel-search"]')
            // click on hp widget search box
            .click('.form-search--widget input[name="q"]');
        browser
            .setValue('*[name="q"]', 'Home Loans');
        browser
            // enter keyword to be search
            .click('#panel-search button[type="submit"]')
            // wait for search result
            .waitForVisible('.gsc-result-info');
        // check if search result is loading
        var value = browser.getText('.gsc-result-info*=results');
        assert(value, 'true');
    });
});

/*
   ---------------------------
   Test for BT calculator
   ---------------------------
*/
describe('FCC BT calcultor', function() {
    before(function(done) {
        browser
            //open balance transfer
            .url('/credit-cards/balance-transfer-credit-cards')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should calculate interest saved', function() {
        browser
            //enter the transfer amount
            .setValue('*[name="ccf_balance_to_transfer"]', '7000')
            .keys('Tab')
            // wait for interest saved calculation to be appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .text-x-large');
        browser
            //enter interest rate
            .setValue('*[name="ccf_current_int_rate"]', '13.25')
            .keys('Tab')
            // wait for interest saved calculation to be appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .text-x-large');
        browser
            //click on calculate button
            .click('.calculator-form >.btn-secondary')
            // wait for interest saved calculation to be appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .text-x-large');
        // check if interest saved amount is showing
        var result = browser.element('.calculator-table  tbody tr:nth-child(1) .text-x-large');
        console.log(result);
        assert(result.isVisible() == true);
    });
}); //end describe

/*
   ---------------------------
   Test for CCF commentary box
   ---------------------------
*/

describe('CCF commentary box', function() {
    before(function(done) {
        browser
            //open page having commentary box
            .url('/credit-cards/business-credit-cards')
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
        var result = browser.isVisibleWithinViewport('.latest-commentary__content');
        assert(result, true);

    });

}); // end describe


/*
   -------------------------
   Test for CCF hp dropdown
   -------------------------
*/

describe('CCF hp dropdown', function() {
    // test for hp dropdown
    it('should load CCF hp dropdown', function() {

        browser
            // open CCF hp
            .url('/credit-cards')
            //click on CCF hp dropdown and wait for dropdown content to load
            .click('.select-nav__trigger.js-select-nav__trigger')
            //wait for dropdown list to appear
            .waitForVisible('.select-nav__list__item');
        // check if content of dropdown is showing
        var result = browser.getText('.select-nav.one_half');
        assert(result, 'I want to:');
    });

    // test for table comparison infobox
    it('should display table product comparison infobox ', function() {
        browser
            // select compare checkboxes
            .click('.homepageTable  tr:nth-child(1) input[type="checkbox"]')
            .click('.homepageTable tr:nth-child(2) input[type="checkbox"]')
            //click on compare button (but not in the stickey )
            .click('.homepageTable tr:not(.floatingHeader) input[type="submit"]')
            .waitForVisible('.product_infobox');
        // check if product infobox is loading
        var result = browser.element('.i_infobox_data.product_infobox_data');
        assert(result.isVisible() === true);
    });
    // test for promo offers
    it('should display promo offers ', function() {
        browser
            // scroll to promo offers
            .scroll('.offsetboxes')
        // check if promo offers are loading
        var result = browser.element('.offsetboxes');
        assert(result.isVisible() === true);
    });
}); // end describe


/*
   ----------------------
   Test for credit score
   ----------------------
   */

describe('Test for credit score', function() {
    before(function(done) {
        browser
            //open credit score page
            .url('/credit-score')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    // test for existing user
    it('should display error message for an existing user', function() {
        browser
            .waitForVisible('.credit-check-sign-up');
        browser
            // enter existing user email id
            .setValue('*[name="emailAddress"]', 'tester1@hiveempire.com')
            //enter existing user password
            .setValue('*[name="password"]', 'test123#')
            //click on sighup button
            .click('.credit-check-sign-up__submit')
            //wait for error message to appear
            .waitForVisible('.form__error.form__error--red-background');
        // check if it do not allow existing to signup and load error message
        var result = browser.getText('.form__group.is_invalid > .form__error');
        assert(result, 'The email address already exists');
    });
    // test for exisitng user credit score
    it('should display credit score for existing user', function() {
        browser
            // click on signin button
            .click('.credit-check-sign-up__have-account > button[type="button"]')
        browser
            // enter existing user email id
            .setValue('*[name="emailAddress"]', 'manvinder+tester@finder.com')
            //enter existing user password
            .setValue('*[name="password"]', 'test123#')
            //click on sighup button
            .click('.credit-check-sign-up__submit')
            //wait for credit score result page to load
            .waitForVisible('.results-summary__score-number');
        // check if credit score is loading
        var quote = browser.element('.results-summary__score-number');
        console.log(quote);
        assert(quote.isVisible() === true);

    });

    // test for next free credit score date
    it('should display next free credit score date', function() {

        browser
            //wait for credit score result to load
            .waitForVisible('.results-summary__score-number');
        // check if next free credit score date is loading
        var quoteDate = browser.element('.results-summary__top-right-label');
        console.log(quoteDate);
        assert(quoteDate.isVisible() === true);
    });
}); // end describe

// test for credit repair qualify
describe('Credit repair qualify', function() {
    // test for credit repair qualify
    it('should qualify for credit repair', function() {
        browser
            .url('/credit-check/bad-credit-history')
            .click('label[for="finance_rejected-1"]')
            .click('label[for="were_seeking_finance-1"]')
            .click('label[for="have_savings-1"]')
            .click('label[for="black_mark-1"]')
            .click('#do_i_qualify')
            .waitForVisible('#form__qualify');
        // check if credit repair qualify form is loading
        var result = browser.element('#form__qualify');
        assert(result.isVisible() === true);
    });
    // test for credit repair rejection
    it('should not qualify for credit repair', function() {
        browser
            .url('/credit-check/bad-credit-history')
            .click('label[for="finance_rejected-2"]')
            .click('label[for="were_seeking_finance-2"]')
            .click('label[for="have_savings-2"]')
            .click('label[for="black_mark-2"]')
            .click('#do_i_qualify')
            .waitForVisible('#lgo-not_eligible');
        // check if credit repair rejection is loading
        var result = browser.element('#lgo-not_eligible');
        assert(result.isVisible() === true);
    });
});



/*
   ----------------------------
   Test for FHL commentary box
   ----------------------------
*/

describe('FHL commentary box', function() {
    it('should show content of commentary box', function() {
        browser
            .url('/home-loans')
            //click on commentary box and expand its content
            .click('.latest-commentary__trigger')
        // check if commentary box content is showing
        var result = browser.isVisibleWithinViewport('.latest-commentary__content');
        assert(result, true);
    });
}); // end describe


/*
   ----------------------------
   Test for FHL table filter
   ----------------------------
*/

describe('Home loan table filter', function() {
    it('should load table filters', function() {
        browser
            //open FHL homepage
            .url('/home-loans')
            //scroll by 500px to show table filter in the screen
            .scroll('.hlf.defaultTable')
            //click on advance search button
            .click('.js-filter-button');
        browser
            // select home loan purpose
            .click('[name ="hlPurpose"] option[value="loan_purpose"]')
            //click on tooptip icon
            .click('.icon-info-solid.fin-text-blue')
            //select input for offset account
            .click('input[name="hl_product_mortgage_offset"][type="radio"][value="0"]')
            //wait for calculation result to appear
            .waitForVisible('.calculator-data');
        browser
            //select input for loan type
            .click('input[name="hl_product_loan_type"][type="radio"][value="variable"]')
            //wait for calculation result to appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        // check if amount saved is showing in the table
        var result = browser.element('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        console.log(result);
        assert(result.isVisible() === true);

    });
}); //end describe

/*
   --------------------------------
   Test for Foreign exchange table
   --------------------------------
*/

describe('Foreign exchange table', function() {
    it('should check FMT table', function() {
        browser
            // open foreign exchange page
            .url('/foreign-exchange')
            // scroll down by 650px to reveal the form
            .scroll(0, 650)
            //click on 'More' link from first row of the table. tr:nth-child(1) is used to select the first row
            .click('tr:nth-child(1) .btn-more-link')
            //wait for page to load when 'More' link is clicked in the table
            .waitForVisible('#right-sidebar');
        //check if sidebar is showing
        var result = browser.element('#right-sidebar');
        console.log(result);
        assert(result.isVisible() === true);
    });
}); //end describe


/*
   ---------------------------
   Test for FPL page elements
   ---------------------------
*/

describe('FPL page elements', function() {
    before(function(done) {
        browser
            // open FPL page
            .url('/personal-loans')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    // test for table calculator
    it('should load FPL table calculator', function() {
        browser
            // scroll to FPL table
            .scroll('.defaultTable')
            //enter amount
            .setValue('#amount', '9000')
            //enter years
            .click('[name ="years"] option[value="5"]')
        browser
            //click on calculate button
            .click('.form-widget--calculator > .btn.btn-secondary')
            //wait for to appear interet saved
            .waitForVisible('.defaultTable.plf tr:nth-child(2) .calculator-data');
        //check if interest saved is showing
        var result = browser.element('.defaultTable.plf tr:nth-child(2) .calculator-data');
        console.log(result);
        assert(result.isVisible() === true);
    });
    // test for table comparison infobox
    it('should display table product comparison box ', function() {
        browser
            // select compare checkboxes
            .click('.defaultTable  tr:nth-child(1) input[type="checkbox"]')
            .click('.defaultTable  tr:nth-child(2) input[type="checkbox"]')
            //click on compare button (but not in the stickey table header)
            .click('.defaultTable tr:not(.floatingHeader) input[type="submit"]')
            .waitForVisible('.product_infobox');
        // check if product infobox is loading
        var result = browser.element('.i_infobox_data.product_infobox_data');
        assert(result.isVisible() === true);
    });
    // test for featured offers
    it('should display featured offers ', function() {
        browser
            // scroll to featured offers
            .scroll('.offsetboxes');
        // check if featured offers are loading
        var result = browser.element('.offsetboxes');
        assert(result.isVisible() === true);
    });
    // test for FPL comments
    it('should display FPL comments ', function() {
        browser
            // scroll to featured offers
            .scroll('#comments');
        // check if comments are loading
        var commentSize = browser.execute(function() {
            return $('.commentlist li').size();
        });
        assert.strictEqual(commentSize.value, 20);
    });
}); //end describe


/*
   ---------------------------------
   Test for CCF review page infobox
   ---------------------------------
*/
describe('Reviw page infobox', function() {
    it('should load review page infobox content', function() {
        browser
            //load CCF review page
            .url('/anz-first-credit-card')
            //scroll by 600px to show infobox in the screen
            .scroll('.nav-tabs.pb-tabs')
            //click on pros&cons tab
            .click('a=Pros & Cons')
            .waitForVisible('.f_container_proscons');
        //check if content of selected tab is showing
        var result = browser.element('.f_container_proscons');
        console.log(result);
        assert(result.isVisible() === true);
    });
}); //end describe


/*
   ---------------------------------
   Test for CCF table tooltip
   ---------------------------------
*/
describe('CCF table tooltip', function() {
    it('should CCF table tooltip content', function() {
        browser
            //open table having tooltip
            .url('/credit-cards/frequent-flyer-credit-cards')
            .waitForVisible('html.js');
        browser
            //scroll by 750px to show table tooltip
            .scroll(0, 750);
        browser
            //click on tooltip in the first table row
            .click('tr.odd > td.sortInitialOrder-desc > span.table-popover')
            //wait for tooltip content to show
            .waitForVisible('.popover.fade');
        // check if tooltip content is showing
        var result = browser.element('.popover.fade');
        console.log(result);
        assert(result.isVisible() === true);
    });
}); //end describe


/*
   ---------------------------------------------
   Test for frequent flyer comparison calculator
   ---------------------------------------------
*/

describe('Frequent flyer comparison calculator', function() {
    before(function(done) {
        browser

            .url('/credit-cards/compare-frequent-flyer-cards')
        var elem = browser.element('.te-results__list');
        elem.waitForVisible();
        browser
            .call(done);
    });
    // test to navigate tabel infobox
    it('should load table infobox', function() {
        browser
            // scroll to promo offers
            .scroll('.more-info-link');
        browser
            // click on View details
            .click('.te-results__list li:nth-child(1) .te-cta__more-info ')
            // wait for infobox content to get hide
            .waitForVisible('.te-expander__content');
        // check if interest saved amount is showing
        var result = browser.element('.te-expander__content');
        console.log(result);
        assert(result.isVisible() == true);
    });
    // test to compare cards from the table
    it('should select cards to compare', function() {
        browser
            // scroll to promo offers
            .scroll('.more-info-link');
        browser
            // click on compare checkbox
            .click('.te-results__list label')
            // wait for compare bar to appear
            .waitForVisible('.compare-bar');
        // check if compare bar is displaying and selected products are also showing
        var result = browser.element('.compare-bar');
        console.log(result);
        assert(result.isVisible() == true);
    });
    // tests for rewards credit card filter
    it('should only display cards having Qantas rewards program', function() {
        browser
            // click on Qantas program type
            .click('.te-frequent-flyer__filter-program-type div:first-child label')
            // wait for infobox content to get hide
            .waitForVisible('.te-results');
        // check cards with Qantas program are showing
        var result = browser.getText('.te-key-detail__rewards-name');
        assert(result, 'Qantas Frequent Flyer');
    });
    // tests for bonus point filter
    it('should display card having bonus points', function() {
        browser
            // click on show all optiion
            .click('.te-frequent-flyer__filter-bonus-points div:first-child label')
            // wait for infobox content to get hide
            .waitForVisible('.te-results');
        // check cards with all available bonus points are showing
        var result = browser.element('.te-key-detail--bonus-points');
        console.log(result);
        assert(result.isVisible() == true);
    });
    // tests for card network filter
    it('should display selected card network', function() {
        browser
            // click on Amex card network
            .scroll('.te-frequent-flyer__filter-card-network');
        browser
            .click('.te-frequent-flyer__filter-card-network .has-padding-bottom-xsmall:nth-child(2) label')
            // wait for infobox content to get hide
            .waitForVisible('.te-results');
        // check if result is loading products with Amex as card network
        var value = browser.getText('.te-key-detail__key=Amex');
        assert(value, 'true');
    });
}); //end describe



/*
   --------------------------------
   Test for CCF purchase calculator
   --------------------------------
*/

describe('CCF purchase calculator widget', function() {
    it('should caclulate interest saved through purchase calculator', function() {

        browser
            // open low interest rate page
            .url('/credit-cards/0-purchase-credit-cards')
            // enter amount
            .setValue('*[name="monthly_spend"]', '3000');
        browser
            // click on calculate button
            .click('.form-widget--calculator > .btn.btn-secondary');
        // check if interest saved is showing in the table
        var result = browser.element('.zeroPercentPurchase tbody tr:first-child .calculator-data.string-bottom');
        console.log(result);
        assert(result.isVisible() === true);
    });
}); // end describe

/*
   ---------------------------------
   Test for CCF left navbar submenu
   ---------------------------------
*/

describe('CCF left navbar submenu', function() {
    it('should display service tooltip content', function() {
        browser
            // load CCF home page
            .url('/credit-cards')
            // click on menu
            .click('#menu-item-834405 > span.menu-element > span.menu-toggle.menu-expand')
            // wait for submenu to expand
            .waitForVisible('.sub-menu');
        browser
            // click on menu
            .click('#menu-item-834405 > span.menu-element > span.menu-toggle')

        // check if submenu expands when click on the main menu
        var result = browser.element('.sub-menu');
        console.log(result);
        assert(result.isVisible() === false);
    });
}); // end describe


/*
   -------------------------
   Test for FSA HP dropdown
   -------------------------
*/

describe('FSA HP dropdown navigator', function() {
    it('should load dropdown navigator', function() {
        browser
            // load CCF home page
            .url('/savings-accounts')
            // click on dropdown navigator
            .click('.select-nav__trigger.js-select-nav__trigger')
            //wait for dropdown list to appear
            .waitForVisible('.select-nav__list');
        // check if content of dropdown is showing
        var result = browser.element('.select-nav__list');
        assert(result.isVisible() == true);
    });
}); // end describe

/*
   --------------------------------
   Test for FSA review page elemens
   --------------------------------
*/

describe('FSA review page elemens', function() {
    before(function(done) {
        browser
            // load savings account page
            .url('/anz-online-saver-savings-account')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should load page sticky header', function() {
        browser
            // scroll browser by 700px to make review page header visible
            .scroll('#spy-related-products')
        // check if submenu expands when click on the main menu
        var result = browser.element('.review-hero');
        console.log(result);
        assert(result.isVisible() == true);
    });
    // test for related products
    it('should display related products in the review page', function() {
        browser
            // scroll to related products
            .scroll('#spy-related-products')
        // check if related products are showing
        var result = browser.element('#spy-related-products');
        console.log(result);
        assert(result.isVisible() == true);
    });
    // test for review page hero content
    it('should display content of review page hero', function() {
        // check if content of review page hero is loading
        var text = browser.getText('.review-hero__details');
        console.log(text);
        assert(text, 'true');
    });
    // test for review page hero interest rate
    it('should display interest rate of review page hero', function() {
        browser
            .waitForVisible('.review-hero')
        // check if interest rate of review page hero is loading
        var text = browser.getText('.review-hero__action > .review-hero__figures');
        console.log(text);
        assert(text, 'true');
    });
}); // end describe

/*
   ------------------------
   Test for FSA calculator
   ------------------------
*/

describe('FSA calculators', function() {
    // test for savings calculator
    it('should calculate interest saved for savings account', function() {
        browser
            // load savings account page
            .url('/savings-accounts')
            // scroll to table calculator
            .scroll('.saf.defaultTable')
            //enter input for calculator
            .setValue('#hisaInitialDeposit', 6500)
            .setValue('#hisaMonthlyDeposit', 700)
            .setValue('#hisaPeriod', 7)
            //click on calculate button
            .click('.form--hisa-calculator > .btn.btn-secondary')
            //wait for calculator result to appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        // check if calculator results are showing
        var result = browser.element('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        console.log(result);
        assert(result.isVisible() == true);
    });
    // test for transaction account
    it('should calculate interest saved for transaction account', function() {
        browser
            // load transaction account page
            .url('/bank-accounts')
            // scroll to table calculator
            .scroll('.saf.TransactionAccountTable3')
            //enter input for calculator
            .setValue('*[name="deposit"]', 5000)
            // click on calculate button
            .click('.form-widget--calculator > .btn-secondary')
            //wait for calculator result to appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        // check if calculator results are showing
        var result = browser.element('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        console.log(result);
        assert(result.isVisible() == true);
    });
    // test for term deposit
    it('should calculate interest saved for term deposit', function() {
        browser
            // load term deposit page
            .url('/term-deposits')
            // scroll to table calculator
            .scroll('.saf.termDepositTable')
            //enter input for calculator
            .setValue('#deposit', 1700)
            .click('#months option[value ="12"]')
            // click on calculate button
            .click('.form-widget--calculator > .btn-secondary')
            //wait for calculator result to appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        // check if calculator results are showing
        var result = browser.element('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        console.log(result);
        assert(result.isVisible() == true);
    });
}); // end describe



/*
   -------------------
   Test for FHL niche
   -------------------
*/

// test for FHL page elements
describe('FHL page elements', function() {
    // test for refinance calculator
    it('should calculate refinance monthly repayment', function() {
        browser
            // open refinance calculator page
            .url('/home-loans/refinancing-home-loans')
            // scroll down to load caculator fields on browser fold
            .scroll('table.t_table')
            // enter amount
            .setValue('*[name="amount"]', '500000')
            //enter interest rate
            .setValue('*[name="current_interest_rate"]', '4.75')
            //enter years
            .click('[name="years"] option[value="25"]')
            // wait for amount saved to be appear
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        browser
            // click on calculate button
            .click('.js-filter-button')
            // scroll down to load caculator fields on browser fold
            .scroll('.js-table-widget-filter')
            // select input for offset account
            .click('input[name="hl_product_mortgage_offset"][type="radio"][value="1"]')
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        browser
            // select input for split home loan
            .click('input[name="hl_product_split"][type="radio"][value="1"]')
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        browser
            // selct fixed home loan
            .click('input[name="hl_product_loan_type"][type="radio"][value="fixed"]')
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        // check if amount saved is showing in the table
        var result = browser.element('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        console.log(result);
        assert(result.isVisible() === true);
    });
    // test for table comparison infobox
    it('should display table product comparison box ', function() {
        browser
            .scroll('table.t_table')
            // select compare checkboxes
            .click('table  tr:nth-child(1) input[type="checkbox"]')
            .click('table  tr:nth-child(2) input[type="checkbox"]')
            //click on compare button (but not in the stickey )
            .click('table tr:not(.floatingHeader) input[type="submit"]')
            .waitForVisible('.product_infobox');
        // check if product infobox is loading
        var result = browser.element('.i_infobox_data.product_infobox_data');
        assert(result.isVisible() === true);
    });
    // test for FHL user comments
    it('should show user comments', function() {
        browser
            // scroll to comment section
            .scroll('#comments');
        // check if submenu expands when click on the main menu
        var commentSize = browser.execute(function() {
            return $('.commentlist li').size();
        });
        assert.strictEqual(commentSize.value, 21);
    });
    // test for featured offers
    it('should load featured offers', function() {
        browser
            // scroll to featured offer
            .scroll('.offsetboxes')
            .waitForVisible('.offsetboxes');
        // check if feature offers are displaying
        var result = browser.element('.offsetboxes');
        assert(result.isVisible() === true);
    });
    // test to check hero interest rate
    it('should display hero interest rate', function() {
        browser
            // scroll to promo offers
            .scroll('.defaultHero');
        // check if interest rate is showing
        var result = browser.element('.rate__integer.rate');
        assert(result.isVisible() === true);
    });
}); //end describe


/*
   ----------------------------------
   Test for FHL review page elements
   ----------------------------------
*/

describe('FHL review page elements', function() {
    before(function(done) {
        browser
            .url('/loans-com-au-essentials-home-loan')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    // test for product template interest rate
    it('should load product template interest rate', function() {
        browser
            .waitForVisible('.rate__integer.rate')
        // check if product template interest rate is loading
        var result = browser.element('.rate__integer.rate');
        assert(result.isVisible() === true);
    });
    // test for stickey header
    it('should load sticky header', function() {
        browser
            // scroll to related products table to make sticky header visible
            .scroll('#pcs')
            // wait for sticky header to load
            .waitForVisible('#summary-belt');
        // check if sticky header is loading
        var result = browser.element('#summary-belt');
        assert(result.isVisible() === true);
    });
    // test for related products
    it('should load related products', function() {
        browser
            // scroll to related products table to make sticky header visible
            .scroll('#pcs')
        // check if related products are loading
        var result = browser.element('.hlf.relatedProductsTable');
        assert(result.isVisible() === true);
    });
    // test for RBA Cash Rate Graph
    it('should load RBA Cash Rate Graph', function() {
        browser
            // scroll to related products table to make sticky header visible
            .scroll('.hlf-graph')
        // check if related products are loading
        var result = browser.element('.hlf-graph');
        assert(result.isVisible() === true);
    });
    // test for product variant
    it('should load product variant', function() {
        browser
            // scroll to related products table to make sticky header visible
            .click('[name ="purpose"] option[value="owner-occupied"]')
            .waitForVisible('.variant-prod-table-details')
        // check if related products are loading
        var value = browser.getText('.variant-prod-title-col*=Owner Occupier');
        assert(value, 'true');
    });
}); // end describe



/*
   --------------------
   Test for IMT niche
   --------------------
*/

describe('IMT page elements', function() {
    before(function(done) {
        browser
            .url('/foreign-exchange')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    // test for table calculator
    it('should calculate amount received for currency exchange calculator', function(amount) {
        browser
            .setValue('input#imtAmount', '6500')
            .click('[name ="imtCurrencyFrom"] option[value="NZD"]')
            .click('[name ="imtCurrencyTo"] option[value="AUD"]')
            .click('.form-widget--calculator > .btn.btn-secondary')
            .waitForVisible('.calculator-table  tbody tr:nth-child(1) .text-x-large');
        browser.addCommand("isWholeNumber", function(amountt) {
            return (/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/).test(amountt);
        });
        var el = browser.getText('.calculator-table  tbody tr:nth-child(1) .text-x-large');
        var wholeNumber = browser.isWholeNumber(el);
        console.log(wholeNumber);
        assert(wholeNumber == true);
    });
    // test for table comparison infobox
    it('should display table product comparison box ', function() {
        browser
            .scroll('.compare-table')
            // select compare checkboxes
            .click('table  tr:nth-child(1) input[type="checkbox"]')
            .click('table  tr:nth-child(2) input[type="checkbox"]')
            //click on compare button (but not in the stickey )
            .click('table tr:not(.floatingHeader) input[type="submit"]')
            .waitForVisible('.product_infobox');
        // check if product infobox is loading
        var result = browser.element('.i_infobox_data.product_infobox_data');
        assert(result.isVisible() === true);
    });
    // test for IMT comments
    it('should display FPL comments ', function() {
        browser
            // scroll to comments
            .scroll('#comments');
        // check if comments are loading
        var result = browser.element('.commentlist');
        assert(result.isVisible() === true);
    });
}); //end describe

describe('IMT review page elements', function() {
    before(function(done) {
        browser
            .url('/torfx-foreign-currency-exchange')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    // test for related products
    it('should load related products', function() {
        browser
            .scroll('#pcs.pcs-related-products')
        // check if related products are loading
        var result = browser.element('.imt.relatedProductsTable');
        assert(result.isVisible() === true);
    });
    // test for featured products
    it('should load featured products', function() {
        browser
            .scroll('.offsetbox')
        // check if related products are loading
        var result = browser.element('.offsetbox');
        assert(result.isVisible() === true);
    });
    // test for IMT user comments
    it('should show user comments', function() {
        browser
            // scroll to comment section
            .scroll('#comments');
        // check if comments are loading
        var result = browser.element('.commentlist');
        assert(result.isVisible() === true);
    });
}); // end describe


/*
   --------------------
   Test for Payday loan
   --------------------
*/
describe('Payday loan page element tests', function() {
    beforeEach(function(done) {
        browser
            .url('/payday-loans')
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });

    // test to tick on compare buton
    it('should click on compare button', function() {
        browser
            // scroll to compare button
            .scroll('.te-results__row:nth-child(1)');
        browser
            // click on compare checkbox
            .click('.te-results__row:nth-child(1) label')
            // wait for compare bar to appear
            .waitForVisible('.compare-bar');
        // check if compare bar is displaying and selected products are also showing
        var result = browser.element('.compare-bar');
        console.log(result);
        assert(result.isVisible() == true);
        browser.deleteCookie();
    });

    // test to unselect compare button on double click
    it('should unselect compare on double click', function() {
        browser
            // scroll to compare button
            .scroll('.te-results__row:nth-child(1)');
        browser
            // click on compare checkbox
            .click('.te-results__row:nth-child(1) label')
            // wait for compare bar to appear
            .waitForVisible('.compare-bar');
        browser
            // click on compare checkbox to inselect it
            .click('.te-results__row:nth-child(1) label')
            // wait for compare bar to get hide
            .waitForVisible('.js-compare-bar__popup.is-hidden');

        // check if compare bar is hidden
        var result = browser.element('.js-compare-bar__popup.is-hidden');
        console.log(result);
        assert(result.isVisible() == true);

    });
    // test to compare selected products
    it('should compare selected loans', function() {
        browser
            // click on compare button
            .click('.te-results__row:nth-child(1) label')
            //wait for compare bar to appear
            .waitForVisible('.compare-bar');
        browser
            // click on compare button
            .click('.te-results__row:nth-child(2) label')
            // wait for compare bar to appear
            .waitForVisible('.compare-bar');
        browser
            // click on compare button
            .click('.compare-bar__compare-button.t_table_comparebutton')
            // wait for compare infobox to appear
            .waitForVisible('#compare-products-modal');
        // check if compare infobox and its content is appearing
        var result = browser.element('.paydayLoansCompareInfobox.compareInfobox');
        console.log(result);
        assert(result.isVisible() == true);
        browser.deleteCookie();
    });
});
