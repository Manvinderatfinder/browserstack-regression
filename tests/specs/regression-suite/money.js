var assert = require('assert');

/*
   ---------------------------
   Test for FIN hp BT widget
   ---------------------------
*/

describe('FIN hp BT calcultor', function() {
    before(function(done) {
        browser
            .url('/')
        var elem = browser.element('html.js');
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should calculate interest saved', function() {
        browser
            //click on credit cards tab
            .click('.homepage__masthead a[href="#panel-credit-cards"]')
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
            .waitForVisible('.balanceTransferTable.calculator')
        browser
        // check if interest saved amount is showing
        var value = browser.getValue('[name="ccf_balance_to_transfer"]');
        assert(value, '25000');
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
            //enter interest rate
            .setValue('*[name="ccf_current_int_rate"]', '13.25')
            //click on calculate button
            .click('.calculator-form >.btn-secondary')
            // wait for interest saved calculation to be appear
            .pause(3000);
        browser
        // check if interest saved amount is showing
        var result = browser.element('tbody > tr:first-child td:nth-child(6) .text-x-large');
        console.log(result);
        assert(result.isVisible() == true);
    });
});




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
    it('should load CCF ho dropdown', function() {

        browser
        // open CCF hp
            .url('/credit-cards')
            //click on CCF hp dropdown and wait for dropdown content to load
            .click('.select-nav__trigger.js-select-nav__trigger')
            //wait for dropdown list to appear
            .waitForVisible('.select-nav__list__item');
        browser
        // check if content of dropdown is showing
        var result = browser.getText('.select-nav.one_half');
        assert(result, 'I want to:');
    });
}); // end describe


/*
   --------------------------
   Test for CCF promo offers
   --------------------------
*/

describe('CCF promo offer', function() {
    it('should display promo offers ', function() {

        browser
        //open a page containing promo offer
            .url('/credit-cards/low-interest-rate-credit-cards')
            // scroll to promo offers
            .scroll('.offsetboxes');

        browser
        // check if promo offers are loading
        var result = browser.element('.offsetboxes');
        assert(result.isVisible() === true);
    });
}); // end describe



/*
   -----------------------------------
   Test for credit score exixting user
   -----------------------------------
*/

describe('Test for an existing user signup', function() {
    it('should display error message for an existing user', function() {
        browser
        //open credit score page
            .url('/credit-score')
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
        browser
        // check if it do not allow existing to signup and load error message
        var result = browser.getText('.form__group.is_invalid > .form__error');
        assert(result, 'The email address already exists');
    });
}); // end describe


/*
   ----------------------------
   Test for FHL commentary box
   ----------------------------
*/

describe('FHL commentary box', function() {
    it('should show content of commentary box', function() {
        browser
            .url('/home-loans')
            // scroll by 650px to show comentary box on the screen
            .scroll(0, 650)
            //click on commentary box and expand its content
            .click('.latest-commentary__trigger')
            //check if content of commentary box is showing
        var hide = browser.isExisting('.latest-commentary__content');
        assert(hide, false);
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
            .waitForVisible('.calculator-data');
       browser
            //clck on Advance filter button to hide table filter
            .click('.js-filter-button')
            .waitForVisible('.icon-plus',2000);
        browser
        // check in table filter content is hiding
        var result = browser.element('.form__legend-label');
        console.log(result);
        assert(result.isVisible() === false);

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
        browser
        //check if sidebar is showing
        var result = browser.element('#right-sidebar');
        console.log(result);
        assert(result.isVisible() === true);
    });
}); //end describe


/*
   ------------------------------
   Test for FPL table calculator
   ------------------------------
*/

describe('FPL table calculator', function() {
    it('should load FPL table calculator', function() {
        browser
        // open FPL page
            .url('/personal-loans')
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
            .waitForVisible('.calculator-data');
        browser
        //check if interest saved is showing
        var result = browser.element('.defaultTable.plf tr:nth-child(2) .calculator-data');
        console.log(result);
        assert(result.isVisible() === true);
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
            .scroll(0, 600)
            //click on application tab
            .click('a=Application Requirements')
            //click on fee and repayment tab
            .click('a=Fees & Repayments')
            //click on pros&cons tab
            .click('a=Pros & Cons')
            .waitForVisible('.f_container_proscons');
        browser
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
        browser
        // check if tooltip content is showing
        var result = browser.element('.sub-menu');
        console.log(result);
        assert(result.isVisible() === false);
    });
}); //end describe


/*
   -------------------------------------
   Test for frequent flyer table infobox
   -------------------------------------
*/

describe('Frequent flyer table infobox', function() {
    before(function(done) {
        browser

            .url('/credit-cards/compare-frequent-flyer-cards')
        var elem = browser.element('.te-frequent-flyer');
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should load table infobox', function() {
        browser
        .pause(3000);
        browser
        // scroll to promo offers
            .scroll('.more-info-link');
        browser
            // click on View details
            .click('.te-results__list li:nth-child(1) .te-cta__more-info ')
            // wait for infobox content to get hide
            .waitForVisible('.te-expander__content');
        browser
        // check if interest saved amount is showing
        var result = browser.element('.te-expander__content');
        console.log(result);
        assert(result.isVisible() == true);
    });
});//end describe



/*
   -----------------------------------------
   Test for frequent flyer compare checkbox
   -----------------------------------------
*/

describe('Frequent flyer table compare', function() {
    before(function(done) {
        browser
        // open frequent flyer page
            .url('/credit-cards/compare-frequent-flyer-cards')
        var elem = browser.element('.te-frequent-flyer');
        elem.waitForVisible();
        browser
            .call(done);
    });
    it('should select cards to compare', function() {
      browser
      .pause(3000);
      browser
      // scroll to promo offers
          .scroll('.more-info-link');
        browser
            // click on compare checkbox
            .click('.te-results__list label')
            // wait for compare bar to appear
            .waitForVisible('.compare-bar');
        browser
        // check if compare bar is displaying and selected products are also showing
        var result = browser.element('.compare-bar');
        console.log(result);
        assert(result.isVisible() == true);
    });
});


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
        browser
        // check if interest saved is showing in the table
        var result = browser.element('.zeroPercentPurchase.ccf.calculator tbody .calculator-data.string-bottom');
        console.log(result);
        assert(result.isVisible() === true);
    });
}); // end describe



/*
   ------------------------------
   Test for FHL refinance calculator
   ------------------------------
*/

describe('Refinance calculator widget', function() {
    it('should calculate refinance monthly repayment', function() {
        browser
        // open refinance calculator page
            .url('/home-loans/refinancing-home-loans')
            // enter amount
            .setValue('*[name="amount"]', '500000')
            //enter interest rate
            .setValue('*[name="current_interest_rate"]', '4.75')
            // .click('input[name="years"][value="30 years"]')
            // wait for amount saved to be appear
            .waitForVisible('.calculator-data.string-bottom');
        browser
        // click on calculate button
            .click('.js-filter-button')
            // scroll down by 650px to load caculator fields on browser fold
            .scroll(0, 650)
            // select input for offset account
            .click('input[name="hl_product_mortgage_offset"][type="radio"][value="1"]')
            .waitForVisible('.calculator-data.string-bottom');
        browser
            // select input for split home loan
            .click('input[name="hl_product_split"][type="radio"][value="1"]')
            .waitForVisible('.calculator-data.string-bottom');
        browser
            // selct fixed home loan
            .click('input[name="hl_product_loan_type"][type="radio"][value="fixed"]')
            .pause(2000);
        browser
        // check if amount saved is showing in the table
        var result = browser.element('.refinancingTable.hlf tbody tr:first-child .calculator-data.string-bottom');
        console.log(result);
        assert(result.isVisible() === true);
    });
}); //end describe



/*
   ---------------------------------------
   Test for FHL review page sticky header
   ---------------------------------------
*/

describe('FHL sticky header', function() {
    it('should load sticky header', function() {
        browser
        // open FHL review page
            .url('/loans-com-au-essentials-home-loan')
            // scroll down by 750px to trigger sticky header
            .scroll(0, 750)
            .waitForVisible('#summary-belt');
        browser
        // check if sticky header is loading
        var result = browser.element('#summary-belt');
        assert(result.isVisible() === true);
    });
}); // end describe


/*
   -----------------------------
   Test for FHL featured offers
   -----------------------------
*/

describe('FHL featured offers', function() {
    it('should load featured offers', function() {
        browser
        // open FHL page
            .url('/home-loans/best-home-loans')
            // scroll to featured offer
            .scroll('.offsetboxes')
            .waitForVisible('.offsetboxes');
        browser
        // check if feature offers are displaying
        var result = browser.element('.offsetboxes');
        assert(result.isVisible() === true);
    });
}); // end describe


/*
   --------------------------------
   Test for FHL hero interest rate
   --------------------------------
*/

describe('FHL hero interest rate', function() {
    it('should display hero interest rate', function() {

        browser
        //open FHL page having interest rate
            .url('/home-loans/best-home-loans')
            // scroll to promo offers
            .scroll('.defaultHero');
        browser
        // check if interest rate is showing
        var result = browser.element('.rate__integer.rate');
        assert(result.isVisible() === true);
    });
}); // end describe




/*
   ----------------------
   Test for FHL comments
   ----------------------
*/

describe('FHL comment list', function() {
    it('should display FHL comment list', function() {
        browser
        // open FHL page
            .url('/home-loans/')
            // scroll to comments list
            .scroll('.commentlist')
            .waitForVisible('.commentlist');
        browser
        // check if comments list is displaying
        var result = browser.element('.commentlist');
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

        browser
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
            .waitForVisible('.select-nav__list__item');
        browser
        // check if content of dropdown is showing
        var result = browser.getText('.select-nav.one_half');
        assert(result, 'I want to:');
    });
}); // end describe
/*
   ---------------------------------------
   Test for FSA review page sticky header
   ---------------------------------------
*/

describe('FSA review page sticky header', function() {
    it('should load dropdown navigator', function() {
        browser
        // load CCF home page
            .url('/bankwest-hero-saver-savings-account')
            // scroll browser by 700px to make review page header visible
            .scroll(0, 700);
        browser
        // check if submenu expands when click on the main menu
        var result = browser.element('.review-hero');
        console.log(result);
        assert(result.isVisible() == true);
    });
}); // end describe


/*
   ---------------------------------------
   Test for FSA review page sticky header
   ---------------------------------------
*/

describe('FSA review page sticky header', function() {
    it('should load dropdown navigator', function() {
        browser
        // load CCF home page
            .url('/bankwest-hero-saver-savings-account')
            // scroll browser by 700px to make review page header visible
            .scroll(0, 700);
        browser
        // check if submenu expands when click on the main menu
        var result = browser.element('.review-hero');
        console.log(result);
        assert(result.isVisible() == true);
    });
}); // end describe


/*
   ----------------------
   Test for FHL comments
   ----------------------
*/

describe('FSA review page sticky header', function() {
    it('should load dropdown navigator', function() {
        browser
        // load CCF home page
            .url('/loans')
            // scroll browser by 700px to make review page header visible
            .scroll(0, 700);
        browser
        // check if submenu expands when click on the main menu
        var commentSize = browser.execute(function() {
            return $('.commentlist li').size();
        });
        console.log(commentSize.value);
    });
}); // end describe
