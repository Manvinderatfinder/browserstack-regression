var assert = require('assert');

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