var assert = require('assert');

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