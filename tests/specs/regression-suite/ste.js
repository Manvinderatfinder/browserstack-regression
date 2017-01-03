var assert = require('assert');

//Deals tests

describe('Deals', function() {
  before(function (done){
    browser
      .url('/deals');
    browser
      .waitForVisible('.join-deals-box');
    browser
      .call(done);
  });
  it('should close sign up for deals form', function() {
    browser
      .click('.close-btn')
      var signUp = browser.waitForVisible('#join-deals', 5000, true);

      assert(signUp == true);
    browser
      .deleteCookie('deals_expand_nav_newsletter');
  });
});

describe('Deals sign up', function() {
  before(function (done){
    browser
      .url('/deals');
    browser
      .waitForVisible('.join-deals-box');
    browser
      .call(done);
  });
  it('should display error when sign up form is empty on submit', function() {
    browser
      .click('a.email-sign-up-submit')
      var err = browser.getText('form .tooltip-inner');
      assert(err, 'Please enter a valid email address');
  });
  it('should be able to sign up for deals and hide sign up form', function(){
    browser
      .setValue('form input.email-signup-input', 'era@finder.com')
      .click('a.email-sign-up-submit');
      var signUp = browser.waitForVisible('#join-deals', 10000, true);
      assert(signUp == true);
  });
});

describe('Deals finder', function() {
  before(function (done){
    browser
      .url('/deals');
    browser
      .waitForVisible('#site-deals-search');
    browser
      .call(done);
  });
  it('should search for deals', function() {
    browser
      .setValue('#site-deals-search', 'Reebok')
      .click('#coupon-search');
      var search = browser.getText('h6');
      assert(search, 'Reebok');
  });
});

describe('Top Deals', function() {
  before(function (done){
    browser
      .url('/deals');
    browser
      .waitForVisible('.coupon-search-wrapper__links');
    browser
      .call(done);
  });
  it('should display Top deals', function() {
    browser
      .click('.coupon-search-wrapper__links li:first-child');
      var url = browser.getUrl();
      assert(url=='https://www.finder.com.au/best-deals')
  });
});

describe('Browse by brand', function() {
  before(function (done){
    browser
      .url('/deals');
    browser
      .waitForVisible('.coupon-search-wrapper__links');
    browser
      .call(done);
  });
  it('should display deals by brand', function() {
    browser
      .click('.coupon-search-wrapper__links li:nth-child(2)');
      var url = browser.getUrl();
      assert(url=='https://www.finder.com.au/deals/browse-brands')
  });
});

describe('Browse by product', function() {
  before(function (done){
    browser
      .url('/deals');
    browser
      .waitForVisible('.coupon-search-wrapper__links');
    browser
      .call(done);
  });
  it('should display deals by product', function() {
    browser
      .click('.coupon-search-wrapper__links li:nth-child(3)');
      var url = browser.getUrl();
      assert(url=='https://www.finder.com.au/deals/browse')
  });
});
