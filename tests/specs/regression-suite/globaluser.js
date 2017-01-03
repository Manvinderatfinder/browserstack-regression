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
    .setValue('.hive-login input[name="user_pass"]', 'tester1')
    //click on login button
    .click('.nav-one-user-box input[type="submit"]')
    //wait for user to get logged in
  browser
    .waitUntil(function() {
      return browser.getText('.large-extra-info') === 'Hello, tester1@hiveemp...'
    }, 5000);
    // check if user login status is showing
    var value = browser.getText('.large-extra-info');
    assert(value, 'Hello, tester1');
    browser.deleteCookie();
    });
    // test for existing user signup
  it('should not allow exixting user to signup', function() {
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
      assert(value, 'The email address already exists');
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
    assert(value, 'Incorrect username/password combination.');
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
    assert(value, 'This email does not have an account.');
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
    assert(value, 'This email does not have an account.');
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
    assert(value, 'Please enter a valid email address');
});
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
    var value = browser.getText('.large-extra-info*=Register');
    assert(value, 'true');
  });
});
