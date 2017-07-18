var assert = require('assert');
var ins = require('../pageobjects/ins.page');

//FTI tests

describe('FTI form errors', function() {
  before(function (done){
    ins.openFti();
    ins.quoteButton.waitForVisible();
    browser.call(done);
  });
  it('should return error when required field - Country is blank', function() {
    ins.getQuote();
    assert(ins.countryError.getText() == 'At least one destination is required');
  });
  it('should return error when required field - Date is blank', function() {
    assert(ins.datesError.getText() == 'Both dates are required');
  });
  it('should return error when required field - Age is blank', function() {
    assert(ins.ageError.getText() == 'Enter the age of each traveller between 0 and 99');
  });
});
