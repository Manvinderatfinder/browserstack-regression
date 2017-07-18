var assert = require('assert');



   //Test for CCF hp dropdown


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
        var result = browser.isVisible('ul.select-nav__list');
        assert(result == true);
    });

});
