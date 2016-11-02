var assert = require('assert');
describe('Test for an existing user signup', function() {
 it('should display error message for an existing user', function () {
   browser
            .url('https://www.finder.com.au/credit-score')
            .setValue('*[name="emailAddress"]','tester1@hiveempire.com')
            .setValue('*[name="password"]','test123#')
            .click('.credit-check-sign-up__submit')
        .pause(1000)
         browser
     var result = browser.getText('.form__group.is_invalid > .form__error');
      assert(result, 'The email address already exists');
    });
});





    