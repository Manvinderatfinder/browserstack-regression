var assert = require('assert');
var mny = require('../pageobjects/money.page');

//Test for FIN hp widget
describe('FIN hp widget', function() {
    // test for home loan calculator
    it('should calculate interest saved for home loan calculator', function() {
        mny.openFinder();
        // click on loan panel
        mny.loanPanel.click();
        //click on home loan icon
        mny.loanIcon.click();
        //enter value for amount
        mny.loanAmount.click();
        mny.loanAmountValue.setValue(['500000' , "\uE004"]);
        //enter interest rate
        mny.interestPeriod.click();
        //click on show cards button
        mny.showLoans.click();
        // wait for FHL table calculator to appear
        mny.fhlInterestEarned.waitForVisible();
        // check if amount showing in table is equal to the amount entered in FIN hp field
        assert(mny.fhlCalAmountValue.getValue() == '500000');
    });
    // test for personal loan calculator
    it('should calculate interest saved for personal loan calculator', function() {
        mny.openFinder();
        // click on loan panel
        mny.loanPanel.click();
        //click on personal loan icon
        mny.fplLoanIcon.click();
        //enter value for amount
        mny.fplLoanAmount.setValue(['8000' , "\uE004"]);
        //enter interest rate
        mny.fplInterestPeriod.click();
        //click on Get start button
        mny.fplShowLoans.click();
        // wait for FPL table calculator to appear
        mny.tableCal.waitForVisible();
        assert(mny.calAmountValue.getValue() == '8000');

    });
    // test for car loan calculator
    it('should calculate interest saved for car loan calculator', function() {
        mny.openFinder();
        // click on loan panel
        mny.loanPanel.click();
        //click on car loan icon
        mny.fclLoanIcon.click();
        //enter value for amount
        mny.fclLoanAmount.setValue('8000');
        //enter interest rate
        mny.fclInterestPeriod.click();
        //click on Get start button
        mny.fclShowLoans.click();
        // wait for car loan table calculator to appear
        mny.tableCal.waitForVisible();
        // check if amount showing in table is equal to the amount entered in FIN hp field
        assert(mny.calAmountValue.getValue() == '8000');

    });
    // test for BT calculator
    it('should calculate interest saved for BT calculator', function() {
        mny.openFinder();
        // click on credit cards panel
        mny.ccfPanel.click();
        //click on bt icon
        mny.btIcon.click();
        //enter value for amount
        mny.btAmount.setValue(['3000' , "\uE004"]);
        //enter interest rate
        mny.btInterest.click();
        //click on Get start button
        mny.btShowCards.click();
        // wait for table calculator to appear
        mny.tableCal.waitForVisible();
        // check if amount showing in table is equal to the amount entered in FIN hp field
        assert(mny.btCalValue.getValue() == '3000');

    });
    // test for BT calculator
    it('should calculate interest saved for BT calculator', function() {
        mny.openFinder();
        //click on search icon
        mny.searchIcon.click();
        // click on hp widget search box
        mny.hpSearch.click();
        // enter keyword to be search
        mny.hpSearch.setValue('Home loans');
        mny.search.click();
        // wait for search result
        mny.searchResult.waitForVisible();
        // check if search result is loading
        assert(mny.searchResultContent.isVisible() == true);
    });
});

//Test for BT calculator
describe('FCC BT calcultor', function() {
    before(function(done) {
        //open balance transfer page
        mny.openBtPage();
        mny.btTable.waitForVisible();
        browser.call(done);
    });
    it('should calculate interest saved', function() {
        browser.scroll('.js-comparison-calculator');
        //enter the transfer amount
        mny.btAmount.setValue(['3000' , "\uE004"]);
        //enter interest rate
        mny.btInterest.setValue(['12.50' , "\uE004"])
        // wait for interest saved calculation to be appear
        mny.btInterestEarned.waitForVisible();
        //click on calculate button
        mny.calculatorButton.click();
        // wait for interest saved calculation to be appear
        mny.btInterestEarned.waitForVisible();
        // check if interest saved amount is showing
        assert(mny.btInterestEarned.isVisible() == true);
    });
});
//Test for CCF homepage
describe('CCF homepage', function() {
    before(function(done) {
        mny.openCCF();
        mny.pageJs.waitForVisible();
        browser.call(done);
    });
    // test for hp dropdown
    it('should load CCF hp dropdown', function() {
        mny.hpDropdown.click();
        //wait for dropdown list to appear
        mny.dropdownList.waitForVisible();
        // check if content of dropdown is showing
        assert(mny.dropdownContent.isVisible() == true);
    });
    // test for table comparison infobox
    /*it('should display table product comparison infobox ', function() {
        // select compare checkboxes
        mny.tableCompare();
    });*/
});

//Test for FHL commentary box
describe('FHL homepage', function() {
    before(function(done) {
        mny.openHomeLoans();
        browser.call(done);
    });
    it('should load table filters', function() {
        browser.scroll(0, 250);
        //click on advance search button
        mny.advanceSearchBtn.click();
        // select home loan purpose
        mny.loanPurpose.click();
        //select input for offset account
        mny.offsetAccount.click();
        mny.loanType.click();
        //wait for calculation result to appear
        mny.fhlInterestEarned.waitForVisible();
        // check if amount saved is showing in the table
        assert(mny.fhlInterestEarned.isVisible() === true);
    });
    it('should show content of commentary box', function() {
        //click on commentary box and expand its content
        mny.commentaryBox.click();
        // check if commentary box content is showing
        assert(mny.commentaryContent.isVisible() == true);
    });
}); // end describe

//Test for Foreign exchange table
describe('Foreign exchange table', function() {
    it('should check FMT table', function() {
        // open foreign exchange page
        mny.openFMT();
        // scroll down by 650px to reveal the form
        browser.scroll(0, 650);
        //click on 'More' link from first row of the table. tr:nth-child(1) is used to select the first row
        mny.moreInfo.click();
        //wait for page to load when 'More' link is clicked in the table
        mny.productTemplate.waitForVisible();
        //check if sidebar is showing
        assert(mny.productTemplate.isVisible() === true);
    });
}); //end describe

//Test for FPL page elements
describe('FPL page elements', function() {
    before(function(done) {
        // open FPL page
        mny.openPersonalLoans();
        mny.pageJs.waitForVisible();
        browser.call(done);
    });
    // test for personal loan hero
    it('should check if hero is visible', function() {
        // check if product infobox is loading
        assert(mny.heroRates.isVisible() == true);
    });
    it('should check for hero description', function() {
        // check if product infobox is loading
        assert(mny.heroDesc.isVisible() == true);
    });
    it('should check for hero bullet points', function() {
        // check if product infobox is loading
        assert(mny.heroBulletPoint.isVisible() == true);
    });
    it('should check for hero provider logo', function() {
        // check if product infobox is loading
        assert(mny.heroLogo.isVisible() == true);
    });
    it('should check for hero standout feature', function() {
        // check if product infobox is loading
        assert(mny.heroFeature.isVisible() == true);
    });
    it('should check for hero security image', function() {
        // check if product infobox is loading
        assert(mny.heroSecurityImage.isVisible() == true);
    });
    it('should check for hero CTA buttons', function() {
        // check if product infobox is loading
        assert(mny.heroCtaButtons.isVisible() == true);
    });
    // test for table calculator
    it('should load FPL table calculator', function() {
        // scroll to FPL table
        mny.tableCal.scroll();
        //enter amount
        mny.calAmountValue.setValue('9000')
        //enter years
        mny.calPeriod.click('option[value="5"]');
        //click on calculate button
        mny.calButton.click();
        //wait for to appear interet saved
        mny.calInterestSaved.waitForVisible();
        //check if interest saved is showing
        assert(mny.calInterestSaved.isVisible() == true);
    });
    // test for table comparison infobox
    it('should display table product comparison box ', function() {
        // select compare checkboxes
        mny.tableCompare();
    });
    // test for featured offers
    it('should display featured offers', function() {
        // scroll to featured offers
        browser.scroll('.offsetboxes');
        // check if featured offers are loading
        assert(mny.offsetBoxes.isVisible() == true);
    });
    // test for FPL comments
    it('should display FPL comments ', function() {
        // scroll to featured offers
        browser.scroll('#comments');
        // check if comments are loading
        assert(mny.comments.isVisible() === true);
    });
    // Test for FPL infobox
    it('should load pros & cons tab content', function() {
        mny.fplReviewPage();
        mny.pageJs.waitForVisible();

        browser.scroll('.nav-tabs.pb-tabs');
        mny.prosCons.click();
        mny.prosContent.waitForVisible();
        //check if content of selected tab is showing
        assert(mny.prosContent.isVisible() == true && mny.consContent.isVisible() == true);
    });
    // test for details tab
    it('should load product details tab content', function() {
        mny.detailsTab.click();
        mny.reviewInfobox.waitForVisible();
        //check if content of selected tab is showing
        assert(mny.reviewInfobox.isVisible() == true);
    });
}); //end describe
describe('Frequent flyer table', function() {
    before(function(done) {
        // open FPL page
        mny.openFrequentFlyer();
        mny.pageJs.waitForVisible();
        browser.call(done);
    });
    // test for personal loan hero
    it('should load table infobox', function() {
        mny.ffMoreInfo.click();
        browser.scroll(0, 350);
        mny.expanderContent.waitForVisible();
        // check if product infobox is loading
        assert(mny.expanderContent.isVisible() == true);
    });
    it('should display table product comparison box ', function() {
        // select compare checkboxes
        mny.tableCompare();
    });
}); //end describe

//Test for Aussie Lead form
describe('Aussie lead form', function() {
    it('should check error message for residency status', function() {
        mny.openAussieForm();
        browser.scroll('.lead-form__enquire-now');
        mny.leadFormButton.click();
        browser.scroll('#residency_check');
        mny.errorMessage.waitForVisible();
        assert(mny.errorMessage.getText() == 'Please select one');
    });
    it('should check error message for No as residency status', function() {
        mny.residencyStatusNo.click();
        browser.scroll('.lead-form__enquire-now');
        mny.leadFormButton.click();
        browser.scroll('#residency_check');
        mny.errorMessage.waitForVisible();
        assert(mny.errorMessage.getText() == 'Unfortunately Aussie can\'t handle your home loan related enquiry at this stage.');
    });
    it('should display error message for form fields', function() {
        mny.residencyStatusYes.click();
        browser.scroll('.lead-form__enquire-now');
        mny.leadFormButton.click();
        browser.scroll('#residency_check');
        assert(mny.firstNameError.getText() == 'Please enter your first name');
        assert(mny.lastNameError.getText() == 'Please enter your last name');
        assert(mny.phoneError.getText() == 'Please enter a valid Australian phone number');
        assert(mny.emailError.getText() == 'Please enter a valid email address');
        assert(mny.suburbError.getText() == 'Please enter your suburb');
        assert(mny.postcodeError.getText() == 'Please enter your postcode');
        assert(mny.amountError.getText() == 'Please enter a loan amount (minimum $50,000)');
    });
    it('should hide error message for loan amount', function() {
        mny.formLoanAmount.setValue('50000');
        assert(mny.amountError.isVisible() == false);
    });
    it('should display provider logo', function() {
        assert(mny.leadFormProviderLogo.isVisible() == true);
    });
    it('should display provider image', function() {
        assert(mny.leadFormProviderImage.isVisible() == true);
    });
    it('should expand T&C', function() {
        browser.scroll('.lead_form__disclaimer > .finder-accordion > h3');
        mny.leadFormTC.click();
        mny.aussieTC.waitForVisible();
        assert(mny.aussieTC.isVisible() == true);

    });

  }); //end describe
