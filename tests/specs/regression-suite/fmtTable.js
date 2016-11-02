var assert = require('assert');
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


