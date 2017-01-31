var assert = require('assert');

/*
     ------------------
     Test for Oneuser
     ------------------
  */
describe('Test for oneuser', function() {
    beforeEach(function(done) {
        browser
            .url('/')
        elem = browser.element('html.js')
        elem.waitForVisible();
        browser
            .call(done);
    });
    // test for existing oneuser
    it('should allow to login an exixting user', function() {
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.nav-one-user-box');
        browser
            // enter existing user email id
            .setValue('.hive-login  input[name="user_email"]', 'tester1@hiveempire.com')
            //enter existing user password
            .setValue('.hive-login input[name="user_pass"]', 'test123#')
            //click on login button
            .click('.nav-one-user-box input[type="submit"]')
        //wait for user to get logged in
        browser
            .waitUntil(function() {
                return browser.getText('.large-extra-info') === 'Hello, tester1@hiveemp...'
            }, 5000);
        // check if user login status is showing
        var value = browser.isVisible('.large-extra-info*=Hello, tester1@hiveemp...');
        assert(value == true);
    });
    // test for existing user signup
    it('should not allow exixting user to signup', function() {
        // delete user login cookie
        browser.deleteCookie();
        browser.refresh();
        // click on user login icon
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.nav-one-user-box');
        browser
            // enter existing user email id
            .click('a*=Sign up here')
            .waitForVisible('.hive-signup');
        browser
            //enter existing user password
            .setValue('.hive-signup input[name="user_email"]', 'tester1@hiveempire.com')
            //click on login button
            .click('.hive-signup input[type="submit"]')
            //wait for user to get login in
            .waitForVisible('.tooltip-inner');
        // check if already existing user error message is showing
        var value = browser.getText('.tooltip-inner');
        console.log(value);
        assert(value == 'The email address already exists');
    });
    // test for wrong password
    it('should display error message for a wrong password', function() {
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.nav-one-user-box');
        browser
            // enter existing user email id
            .setValue('.hive-login  input[name="user_email"]', 'tester1@hiveempire.com')
            //enter wrong user password
            .setValue('.hive-login input[name="user_pass"]', 'tester')
            //click on login button
            .click('.nav-one-user-box input[type="submit"]')
            //wait for error message to appear
            .waitForVisible('.tooltip-inner');
        // check if error message for wrong password is showing
        var value = browser.getText('.tooltip-inner');
        assert(value == 'Incorrect username/password combination.');
    });

    // test for wrong emailID
    it('should display error message for a wrong emailID', function() {
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.nav-one-user-box');
        browser
            // enter wrong user email id
            .setValue('.hive-login  input[name="user_email"]', 'tester@hiveempire.com')
            //enter existing user password
            .setValue('.hive-login input[name="user_pass"]', 'tester1')
            //click on login button
            .click('.nav-one-user-box input[type="submit"]')
            //wait for error message to appear
            .waitForVisible('.tooltip-inner');
        // check if error message for wrong emailID is showing
        var value = browser.getText('.tooltip-inner');
        assert(value == 'This email does not have an account.');
    });
    // test for password reset for non user
    it('should not send reset password link to non existing user', function() {
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.nav-one-user-box');
        browser
            // click on forgot password link
            .click('a*=Forgot password?')
            .waitForVisible('.hive-forgot-password');
        browser
            // enter email id
            .setValue('.hive-forgot-password input[name="user_email"]', 'tester@hiveempire.com')
            //click on send new password button
            .click('.hive-forgot-password input[name="submit"]')
            // wait for error message to appear
            .waitForVisible('.tooltip-inner');
        // check if error message is showing
        var value = browser.getText('.tooltip-inner');
        assert(value == 'This email does not have an account.');
    });
    // test for empty login field
    it('should display error for empty fields', function() {
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.nav-one-user-box');
        browser
            //click on login button
            .click('.nav-one-user-box input[type="submit"]')
            //wait for error message to appear for empty fields
            .waitForVisible('.tooltip-inner');
        // check if error message is appearing for empty fields
        var value = browser.getText('.tooltip-inner');
        assert(value == 'Please enter a valid email address');
    });/**
    // test for oneuser logout
    it('should logout user', function() {
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.nav-one-user-box');
        browser
            // enter existing user email id
            .setValue('.hive-login  input[name="user_email"]', 'tester1@hiveempire.com')
            //enter existing user password
            .setValue('.hive-login input[name="user_pass"]', 'tester1')
            //click on login button
            .click('.nav-one-user-box input[type="submit"]')
        //wait for user to get logged in
        browser
            .waitUntil(function() {
                return browser.getText('.large-extra-info') === 'Hello, tester1@hiveemp...'
            }, 5000);
        browser
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.user-logged-in');
        browser
            .click('a*=Logout')
            .waitForVisible('html.js');
        // check if user login status is showing
        var value = browser.isVisible('.large-extra-info*=Register');
        assert(value == true);
    });*/
});

// test for my profile page
describe('Test for my profile page', function() {
    it('should load error message when empty inputs are entered', function() {
        browser
            .url('/login')
            //click on login button
            .click('#login-form input[type="submit"]')
            //wait for error message
            .waitForVisible('.well.warning')
        // check if error message is showing
        var value = browser.getText('.well.warning');
        assert(value == 'Your email or password are not correct');
    });

    it('should load url with form not valid message', function() {
        browser
            .url('/login')

            //click on login button
            .click('#login-form input[type="submit"]')
            //wait for error message
            .waitForVisible('.well.warning')
        // check if error message is showing
        var url = browser.getUrl();
        assert(url == 'https://www.finder.com.au/login?action=login&message_type=form_not_valid');
    });

    /*it('should able to sign in as a new user', function() {
        // function to generate random user email
        var ran = Math.floor((Math.random() * 100000) + 1);
        browser
            .url('/login?action=register')
            // enter a random email
            .setValue('#register-form input[name="user_email"]', 'tester.' + ran + '@finder.com');
        browser
            //click on signup button
            .click('#register-form input[type="submit"]');
        browser
            // wait for user profle page to open
            .waitForVisible('#page-user-profile');
        // check if user profile page is loading
        var url = browser.getUrl();
        assert(url == 'https://www.finder.com.au/user-profile?_tab=myaccount');
        browser.deleteCookie();
    });*/

    it('should allow to logout ', function() {
        browser
            .url('/login')
            // enter existing user email id
            .setValue('#login-form  input[name="user_email"]', 'tester1@hiveempire.com')
            //enter existing user password
            .setValue('#login-form input[name="user_pass"]', 'tester1')
            //click on login button
            .click('#login-form input[type="submit"]');
        //wait for user to get logged in
        browser
            .waitUntil(function() {
                return browser.getText('.large-extra-info') === 'Hello, tester1@hiveemp...'
            }, 5000);
        browser
            // click on logged in user link
            .click('.btn-nav.btn-nav--login')
            .waitForVisible('.user-logged-in');
        browser
             // click on logout button
            .click('a*=Logout')
            .waitForVisible('#login-form');
        // check if user login status is showing
        var url = browser.getUrl();
        assert(url == 'https://www.finder.com.au/login');
    });

    it('should able to reset password', function() {
        browser
            .url('/login?action=lostpassword');
        browser
            // enter existing user email id
            .setValue('#lostpassword-form  input[name="user_email"]', 'mans.tester@gmail.com')
            //click on reset password button
            .click('#lostpassword-form input[type="submit"]')
            //wait for password to be send
            .waitForVisible('.well.success');
        // check if password reset url is loading
        var url = browser.getUrl()
        assert(url == 'https://www.finder.com.au/login?action=lostpassword&message_type=psw_reset');
        browser.deleteCookie();
    });

    it('should allow to login as existing user', function() {
        browser
            .url('/login')
            // enter existing user email id
            .setValue('#login-form  input[name="user_email"]', 'tester1@hiveempire.com')
            //enter existing user password
            .setValue('#login-form input[name="user_pass"]', 'test123#')
            //click on login button
            .click('#login-form input[type="submit"]')
        //wait for user to get logged in
        browser
            .waitUntil(function() {
                return browser.getText('.large-extra-info') === 'Hello, tester1@hiveemp...'
            }, 5000);
        // check if user peofile url is loading
        var url = browser.getUrl()
        assert(url == 'https://www.finder.com.au/user-profile/questions');
        browser.deleteCookie();

    });
    it('should display error message for weak password', function() {
        browser
            .url('/login')
            // enter existing user email id
            .setValue('#login-form  input[name="user_email"]', 'tester1@hiveempire.com')
            //enter existing user password
            .setValue('#login-form input[name="user_pass"]', 'test123#')
            //click on login button
            .click('#login-form input[type="submit"]')
        //wait for user to get logged in
        browser
            .waitUntil(function() {
                return browser.getText('.large-extra-info') === 'Hello, tester1@hiveemp...'
            }, 5000);
        browser
            // click on account and setting tab
            .click('a*=Account Settings')
            .waitForVisible('.user-profile__settings');
        browser
             // enter weak password
            .setValue('input[name="user_pass"]', 'test')
            // enter weak password to confirm
            .setValue('input[name="user_pass_confirm"]', 'test')
            // click on submit button
            .click('button[name="submit"]')
            // wait for error message to load
            .waitForVisible('#password_error_strong');
        var value = browser.isVisible('#password_error_strong*=Your password must be at least 8 characters long')
        assert(value == true);
    })
});
