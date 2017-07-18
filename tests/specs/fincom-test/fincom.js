var assert = require('assert');
var mny = require('../pageobjects/money.page');



describe('FINCOM homepage', function() {
    before(function(done) {
        mny.openFinus();
        mny.pageJs.waitForVisible();
        browser.call(done);
    });
    it('should display global flag dropdown', function() {
        assert(mny.globalFlag.isVisible() == true);
    });

    it('should display compare section', function() {
        mny.selecttionBtn.click();
        mny.blCompareSection.waitForVisible();
        assert(mny.ccCompareSection.isVisible() == true && mny.mtCompareSection.isVisible() == true && mny.plCompareSection.isVisible() == true);
    });

    it('should display search result', function() {
        mny.openFinusIns();
        mny.finUsSearch.setValue('Credit Cards');
        browser.keys('Enter');
        mny.searchResult.waitForVisible();
        assert(mny.searchResult.isVisible() == true);
    });
});
