var assert = require('assert');
var gxuser = require('../pageobjects/gxuser.page');
var ste = require('../pageobjects/ste.page');


describe('Test for my profile page', function() {
    before(function(done) {
        gxuser.openUserSignin();
        gxuser.userLogin.waitForVisible();
        browser.call(done);
    });
    it('should load error message for email address', function() {
        gxuser.loginButton.click();
        gxuser.forgetPwdText.waitForVisible();
        assert(gxuser.emailErrorMsg.getText() == 'Please enter a valid email address' && gxuser.passErrorMsg.getText() == 'Please enter your password');
    });

    it('should check Forgot password?', function() {
        gxuser.forgetPwd.click();
        gxuser.forgetPwdText.waitForVisible();
        assert(gxuser.forgetPwdText.getText() == 'Forgot your password?');
    });
});
