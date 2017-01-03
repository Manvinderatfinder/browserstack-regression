var assert = require('assert');

//FTI tests

describe('FTI form errors', function() {
  before(function (done){
    browser
      .url('/travel-insurance')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('should return error when required field - Country is blank', function() {
    browser
      .click('.fti-single button.fin-btn-green')
      var err = browser.getText('.fti-single .form-group.one_half.clearfix:first-child .error-message');
      assert(err, 'At least one destination is required');
  });
  it('should return error when required field - Date is blank', function() {
      var err = browser.getText('.fti-single .last_column.error .error-message');
      assert(err, 'Both dates are required');
  });
  it('should return error when required field - Age is blank', function() {
      var err = browser.getText('.fti-single .one_third .error-message');
      assert(err, 'Enter the age of each traveller between 0 and 99');
  });
});

describe('FTI Single quote', function() {
  it('should submit FTI form without error', function() {
    browser
      .url('/travel-insurance')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .waitForVisible('#fti-single-trip .select2-search-field input[type="text"]');
    browser
      .element('#fti-single-trip .select2-search-field input[type="text"]')
      .setValue('Australia')
      .click('.select2-drop .select2-match');
    browser
      .click('#fti-single-trip input[name="fti_from"]')
      .element('.datepicker-days td.day.today')
      .click();
    browser
      .click('#fti-single-trip input[name="fti_to"]')
      .element('.datepicker-days td.day.today')
      .click();
    browser
      .setValue('#fti-single-trip .fti-age-wrap input:nth-child(2)', '27');
    browser
      .click('#fti-single-trip button[type="submit"]');
    browser
      .element('.fti-result-table')
      .waitForVisible();
      assert(browser.isVisible('.fti-result-table')==true);
  });
  it('should display correct summary info', function() {
    var text = browser.getText('#quote-title');
    assert(text, '1 person travelling to Australia for 1 day');
  });
  it('should display reference number', function() {
    var ref = browser.isExisting('.fti-search-ref #fti-reference');
    assert(ref, true);
  });
  it('should expand More info', function() {
    browser
      .click('.fti-result-table tr:nth-child(1) .fti-product-extra-text')
      var more = browser.isExisting('.fti-product-extra-block');
      assert(more, true);
  });
  it('should replace More info to Hide info', function() {
    browser
      var text = browser.getText('.fti-result-table tr:nth-child(1) .fti-product-extra-text');
      assert(text, 'Hide info');
  });
  it('should collapse Hide info', function() {
    browser
      .click('.fti-result-table tr:nth-child(1) .fti-product-extra-text')
      var hide = browser.isExisting('.fti-product-extra-block');
      assert(hide, false);
  });
  it('should sort total price', function() {
    var price1 = browser.getText('.fti-result-table tr:first-child .fti-price-quote');
    browser
      .click('.fti-fin-price.tablesorter-header.tablesorter-headerAsc')
      var price2 = browser.getText('.fti-result-table tr:first-child .fti-price-quote');
      assert(price2>price1, true);
  });
  it('should check add traveller in Edit search', function(){
    browser
      .scroll(0,600);
    browser
      .click('.fti-single .icon-plus')
      .setValue('.fti-single .fti-age[name="traveller_age1"]','28')
      var res = browser.isExisting('.fti-single .fti-age[name="traveller_age1"]');
      assert(res, true);
  });
  it('should check remove traveller in Edit search', function(){
    browser
      .click('.fti-single .icon-plus')
      .setValue('.fti-single .fti-age[name="traveller_age2"]','24')
      .click('.fti-single .icon-minus')
      var res = browser.isExisting('.fti-single .fti-age[name="traveller_age2"]');
      assert(res, false);
  });
  it('should remove country', function() {
    browser
      .click('.fti-single .select2-search-choice-close')
      var text = browser.getText('.fti-single .fti-destination');
      assert(text, 'Enter your destination');
  });
  it('should return error when destination is blank', function(){
    browser
      .click('.fin-btn.btn--fluid.btn-secondary')
      var error = browser.getText('.fti-single .form-group:first-child .error-message')
      assert(error, 'At least one destination is required');
  });
  it('should return error when email address is blank in Edit search', function(){
    browser
      .click('.fti-save-search')
      .click('#fti_save_quote .fin-btn.fin-btn-green')
      var error = browser.getText('.fti-save-retrieve #fti_save_quote .error-message');
      assert(error, 'Enter a valid email address');
  });
  it('should return error when email address is not valid in Edit search', function() {
    browser
      .setValue('#fti_save_quote input', 'test')
      .click('#fti_save_quote .fin-btn.fin-btn-green')
      var error = browser.getText('.fti-save-retrieve #fti_save_quote .error-message');
      assert(error, 'Enter a valid email address');
  });
  it('should sent search result to email in Edit search', function (){
    browser
      .setValue('#fti_save_quote input', 'e6j9dv+123@gmail.com')
      .click('#fti_save_quote .fin-btn.fin-btn-green')
      var msg = browser.getText('#fti_save_quote li');
      assert(msg, 'Email sent');
  });
  it('should return error when search ref is blank', function(){
    browser
      .click('.fti-retrieve-search')
      .click('#fti_retrieve_quote .fin-btn-green')
      var error = browser.getText('#fti_retrieve_quote .error-message');
      assert(error, 'Enter a Search Ref No.');
  });
  it('should return search result after retrieve in Edit search ', function (){
    browser
      .setValue('#fti_retrieve_quote input', '2015E809')
      .click('#fti_retrieve_quote .fin-btn-green');
    browser
      .scroll(0,-600)
      var ref = browser.getText('#fti-reference');
      assert(ref, '2015E809');
  });
  it('should not display Save this search link after Retrieve in Edit search', function() {
    browser
      .element('.fti-result-table')
      .waitForVisible();
      assert(browser.isVisible('.fti-result-table')==true);
    browser
      .scroll(0,600)
      //var res = browser.isExisting('.fti-save-search');
      assert(browser.isVisible('.fti-save-search')==false);
  });
  it('should not display Retrieve a saved search after Retrieve in Edit search', function (){
    //var res = browser.isVisible('.fti-retrieve-search');
    assert(browser.isVisible('.fti-retrieve-search')==false);
  });
  it('should display Start a new search after Retrieve in Edit search', function(){
    var res = browser.isExisting('a.fti-edit-search');
    assert(res, true);
  });
  it('should direct to travel insurance page after clicking travel insurance breadcrumb', function(){
    browser
      .scroll(0,-500);
    browser
      .element('.fti-result-description .pull-left')
      .click('a=Travel Insurance')
      var el = browser.isExisting('.fti-quote-engine.fti-quote-home');
      assert(el, true);
  });
});

describe('FTI form popular destinations', function() {
  before(function (done){
    browser
      .url('/travel-insurance')
      var elem = browser.element('#fti-single-trip .select2-search-field input[type="text"]');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('should display popular destinations', function() {
    browser
      .click('#fti-single-trip .select2-search-field input[type="text"]');
      var res = browser.isExisting('.country-panel');
      assert(res, true);
  });
  it('should be able to select from popular destinations', function() {
    browser
      .waitForVisible('.country-panel button[data-destination-id="304"]')
    browser
      .click('.country-panel button[data-destination-id="304"]');
      var res = browser.getText('.fti-single .fti-destination-wrap li div');
      assert(res, 'UK');
  });
  it('should close popular destinations box', function() {
    browser
      .click('#fti-single-trip .select2-search-field input[type="text"]')
      .click('.country-panel .icon-cross')
      var res = browser.isExisting('.country-panel');
      assert(res, false);
  });
  it('should remove country', function() {
    browser
      .element('.fti-single .select2-search-choice-close')
      .waitForVisible();
    browser
      .click('.fti-single .select2-search-choice-close')
      .click('.country-panel .icon-cross');
      var res = browser.isExisting('.country-panel');
      assert(res, false);
  });
  it('should display dropbox for auto suggestion', function() {
    browser
      .click('#fti-single-trip .select2-search-field input[type="text"]')
      .setValue('#fti-single-trip .select2-search-field input[type="text"]', 'As')
      var res = browser.isExisting('.select2-drop-active');
      assert(res, true);
  });
});

describe('FTI form add/remove travellers', function() {
  before(function (done){
    browser
      .url('/travel-insurance')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('should be able to add more travellers', function() {
    browser
      .click('.fti-single .icon-plus')
      var res = browser.isExisting('.fti-single .fti-age[name="traveller_age1"]');
      assert(res, true);
  });
  it('should be able to remove travellers', function() {
    browser
      .click('.fti-single .icon-minus')
      var res = browser.isExisting('.fti-single .fti-age[name="traveller_age1"]');
      assert(res, false);
  });
});

describe('FTI receive a copy of quote', function() {
  before(function (done){
    browser
      .url('/travel-insurance')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('should provide input to receive a copy of quote for users who are not logged in', function(){
    browser
      var res = browser.isVisible('.fti-single .clearleft.form-group.one_half .form-group>input');
      assert(res==true);
  });
  it('should give options to receive a copy of quote for logged in users', function(){
    browser
      .click('.btn-nav.btn-nav--login i:nth-child(1)')
      .setValue('.hive-login input[name="user_email"]', 'e6j9dv+123@gmail.com')
    browser
      .setValue('.hive-login input[name="user_pass"]', 'p1nkEleph@nt')
      .click('.hive-login input[type="submit"]');
    browser
      .element('.large-extra-info')
      .waitForVisible();
      var res = browser.isVisible('.fti-single .form-group label input');
      assert(res,true);
    browser
      .deleteCookie()
  });
});

describe('FTI Single quote - Filter your results', function() {
  before(function (done){
    browser
      .url('/travel-insurance')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('should filter Includes coupon', function() {
    browser
      .setValue('#fti-single-trip .select2-search-field input[type="text"]', 'Australia')
      .click('.select2-drop .select2-match');
    browser
      .click('#fti-single-trip input[name="fti_from"]')
      .click('.datepicker-days td.day.today');
    browser
      .click('#fti-single-trip input[name="fti_to"]')
      .click('.datepicker-days td.day.today');
    browser
      .setValue('#fti-single-trip .fti-age-wrap input:nth-child(2)', '27');
    browser
      .click('#fti-single-trip button[type="submit"]');
    browser
      .element('.fti-result-table')
      .waitForVisible();
      assert(browser.isVisible('.fti-result-table')==true);
    browser
      .click('.fti-form-group input[name="coupon_discount"]')
      var filter = browser.getText('.fti-result-table tr:first-child span.fti-coupon span');
      assert(filter, 'Includes coupon');
  });
  it('should filter Cruise cover', function() {
    browser
      .click('.fti-form-group input[name="cruise_specific"]')
      var icon = browser.isExisting('.fti-filter-icons>a>i');
      assert(icon, true);
  });
  it('should check No results found', function() {
    browser
      .click('.fti-form-group input[name="ski"]')
      var result = browser.getText('.has-margin-bottom-medium');
      assert(result, 'No results found');
  });
  it('should check Clear all filters', function() {
    browser
      .click('.form__reset.pull-right.fin-text-light-grey.text-xx-small')
      var filter = browser.element('.fti-form-group input[name="coupon_discount"]').isSelected;
      assert(filter, false);
  });
});

describe('FTI retrieve quote', function() {
  before(function (done){
    browser
      .url('/travel-insurance')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('should retrieve quote in travel insurance page', function() {
    browser
      .click('.fti-retrieve a')
      .setValue('#fti_retrieve_quote input', 'BF146512');
    browser
      .click('#fti_retrieve_quote button')
      var ref = browser.getText('#fti-reference');
      assert(ref, 'BF146512');
  });
  it('should direct to travel-insurance page on Start a new search', function() {
    browser
      .scroll(0,600)
    browser
      .click('.fti-sidebar-options .fti-new-search a[href="/travel-insurance"]')
    var url = browser.getUrl();
    assert(url=='https://www.finder.com.au/travel-insurance');
  });
});

describe('FTI Multi-trip quote', function() {
  before(function (done){
    browser
      .url('/travel-insurance')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('should display Multi-trip form tab', function(){
    browser
      .click('a.fti-tab-multi')
      var res = browser.element('.fti-form .active .fti-tab-multi');
      assert(res, true);
  });
  it('should display multi-trip quote results', function() {
    browser
      .click('#fti-multi-trip .select2-search-field input[type="text"]')
      .click('.country-panel button[data-destination-id="73"]');
    browser
      .setValue('#fti-multi-trip .select2-search-field input[type="text"]', 'Italy')
      .click('.select2-drop .select2-match');
    browser
      .click('#fti-multi-trip input[name="fti_from"]')
      .click('.datepicker-days td.day.today');
    browser
      .setValue('#fti-multi-trip .fti-age-wrap input:nth-child(2)', '27');
    browser
      .click('.fti-multi .icon-plus')
      .setValue('.fti-multi .fti-age-wrap input[name="traveller_age1"]', '22');
    browser
      .click('#fti-multi-trip button[type="submit"]');
    browser
      .element('.fti-result-table')
      .waitForVisible();
      var info = browser.getText('#quote-title');
      assert(browser.isVisible('.fti-result-table')==true);
  });
  it('should display correct summary info', function() {
    var text = browser.getText('#quote-title');
    assert(text, '1 person travelling multiple times in one year');
  });
  it('should direct to home page after clicking finder breadcrumb', function(){
    browser
      .click('.fti-result-description .pull-left a:first-child')
      var url = browser.getUrl();
      assert(url=='https://www.finder.com.au/')
  });
});

//FLI tests

describe('FLI Level of Cover', function() {

  var title = browser.getText('h1');

  before(function (done){
    browser
      .url('/income-protection')
      var elem = browser.element('.btn.btn-secondary.btn--fluid');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('About You form - should return error when Sex field is empty', function(){
    browser
      .click('.btn.btn-secondary.btn--fluid');
      var err1 = browser.getText('.relative.clearfix>div:first-child span');
      assert(err1, 'Please select your sex');
  });
  it('About You form - should return error when Age field is empty', function(){
    var err2 = browser.getText('.relative.clearfix>div:nth-child(2)>div:first-child span');
    assert(err2, 'Please type your age');
  });
  it('About You form - should return error when State field is empty', function(){
    var err3 = browser.getText('.relative.clearfix>div:nth-child(2)>div:nth-child(2) span');
    assert(err3, 'Please select your state');
  });
  it('About You form - should return error when Smoke selection is empty', function(){
    var err4 = browser.getText('.relative.clearfix>div:nth-child(3)>div:first-child>.clearfix span');
    assert(err4, 'Please select one');
  });
  it('About You form - should return error when Occupation field is empty', function(){
    var err5 = browser.getText('.relative.clearfix>div:nth-child(3)>div:nth-child(2)>span.form__error');
    assert(err5, 'Please type your occupation');
  });
  it('About You form - should return error when age is not below 10', function(){
    browser
      .setValue('input[name="age"]', '2')
      .click('button.btn[type="submit"]');
      var err2 = browser.getText('.relative.clearfix>div:nth-child(2)>div:first-child span');
      assert(err2, 'Enter age between 10 and 75');
    browser
      .clearElement('input[name="age"]');
  });
  it('About You form - should return error when age is above 75', function(){
    browser
      .setValue('input[name="age"]', '77')
      .click('button.btn[type="submit"]');
      var err2 = browser.getText('.relative.clearfix>div:nth-child(2)>div:first-child span');
      assert(err2, 'Enter age between 10 and 75');
  });
  it('About You form - should auto display occupation dropdown when inputting in occupation field', function(){
    browser
      .setValue('input[name="occupation"]', 'tes');
      var drop = browser.isVisible('.awesomplete li');
      assert(drop, true);
  });
  it('About You form - should be able to select from occupation dropdown', function(){
    browser
      .click('.awesomplete li:first-child');
      var occ = browser.getText('.awesomplete>ul>li');
      assert(occ, 'Test Pilot');
  });
  it('About You form - should be able to clear occupation field', function(){
    var occ = browser.element('.awesomplete input');
    occ.clearElement();
    assert(occ,'');
  });
  it('About You form - should submit form without error', function(){
    browser
      .click('.icon-male')
      .setValue('input[name="age"]', 53)
      .selectByVisibleText('select#countrystate', 'NSW')
      .click('label[for="non_smoker"]')
      .setValue('input[name="occupation"]', 'Footballer')
      .click('button.btn[type="submit"]');
      assert(title, 'Level of cover');
  });
  it('Level of Cover - should return error to select at least one cover', function(){
    browser
      .scroll(0,500)
      .click('.fli-life-cover button.btn-secondary');
      var err = browser.getText('span.form__error');
      assert(err, 'You need to select at least one cover');
  });
  it('Level of Cover - should display cover not included as default for covers', function(){
    var def = browser.getText('.form__range__output');
    assert(def, 'Cover not included');
  });
  it('Level of Cover - should open step 1 Level of Cover Calculator', function(){
    browser
      .click('button.fli-level-calculator__button');
      var stp1 = browser.getText('form[name="step-1"]>div>.fin-text-grey');
      assert(stp1, 'Step 1 of 3');
  });
  it('Step 1 Level of Cover Calc - should return error on Step 1 when fields are blank', function(){
    browser
      .click('form[name="step-1"] button[type="submit"]')
      var err = browser.getText('.fli-cover-calculator__next-step .form__error');
      assert(err, 'Oops! Looks like you missed a question');
  });
  it('Step 1 Level of Cover Calc - should display additional fields when insurer has children', function(){
    browser
      .click('label[for="with_children"]');
      assert(browser.isVisible('#children'), true);
      assert(browser.isVisible('#youngestChildAge'), true);
  });
  it('Step 1 Level of Cover Calc - Next should proceed to Step 2', function(){
    browser
      .setValue('input#income', 50000)
      .click('label[for="no_children"]')
      .click('form[name="step-1"] button[type="submit"]');
      var stp2 = browser.getText('form[name="step-2"]>div>.fin-text-grey');
      assert(stp2, 'Step 2 of 3');
  });
  it('Step 2 Level of Cover Calc - should return error when no selection is made', function(){
    browser
      .click('form[name="step-2"] button[type="submit"]')
      var err = browser.getText('.fli-cover-calculator__next-step .form__error');
      assert(err, 'Oops! Looks like you missed a question');
  });
  it('Step 2 Level of Cover Calc - Previous should go back to Step 1', function(){
    browser
      .click('.fli-cover-calculator__step-controls>div:first-child button')
      var stp1 = browser.getText('form[name="step-1"]>div>.fin-text-grey');
      assert(stp1, 'Step 1 of 3');
  });
  it('Step 1 Level of Cover Calc - Cancel should close calculator', function(){
    browser
      .click('.fli-cover-calculator .last_column button')
      assert(title, 'Level of cover');
  });
  it('Step 2 Level of Cover Calc - should display additional field when insurer has Home Loan', function(){
    browser
      .click('button.fli-level-calculator__button')
      .click('form[name="step-1"] button[type="submit"]')
      .click('label[for="with_home_loan"]');
      assert(browser.isVisible('#homeLoan'), true);
  });
  it('Step 2 Level of Cover Calc - should display additional field when insurer has any other debts', function(){
    browser
      .click('label[for="with_debt"]');
      assert(browser.isVisible('#debt'), true);
  });
  it('Step 2 Level of Cover Calc - Next should proceed to Step 3', function(){
    browser
      .click('label[for="no_home_loan"]')
      .click('label[for="no_debt"]')
      .click('form[name="step-2"] button[type="submit"]');
      var stp3 = browser.getText('form[name="step-3"]>div>.fin-text-grey');
      assert(stp3, 'Step 3 of 3');
  });
  it('Step 3 Level of Cover Calc - Previous should go back to Step 2', function(){
    browser
      .click('.fli-cover-calculator__step-controls>div:first-child button')
      var stp2 = browser.getText('form[name="step-2"]>div>.fin-text-grey');
      assert(stp2, 'Step 2 of 3');
  });
  it('Step 2 Level of Cover Calc - Cancel should close calculator', function(){
    browser
      .click('.fli-cover-calculator .last_column button');
      assert(title, 'Level of cover');
  });
  it('Step 3 Level of Cover Calc - should check life cover default value for insurer with no debt', function(){
    browser
      .click('button.fli-level-calculator__button')
      .click('form[name="step-1"] button[type="submit"]')
      .click('form[name="step-2"] button[type="submit"]');
      var lc = browser.getText('label[for="calcLifeCover"] span');
      assert(lc, '$1,800,000');
  });
  it('Step 3 Level of Cover Calc - should check income protection cover default value for insurer with no debt', function(){
    var ip = browser.getText('label[for="calcIncome"] span');
    assert(ip, '$4,000');
  });
  it('Step 3 Level of Cover Calc - should check trauma cover default value for insurer with no debt', function(){
    var tc = browser.getText('label[for="calcTrauma"] span');
    assert(tc, '$150,000');
  });
  it('Step 3 Level of Cover Calc - should check total and permanent disability cover default value for insurer with no debt', function(){
    var tpd = browser.getText('label[for="calcTpd"] span');
    assert(tpd, '$1,800,000');
  });
  it('Step 3 Level of Cover Calc - Cancel should close calculator', function(){
    browser
      .click('input.form__input-checkbox')
      .click('.fli-cover-calculator .last_column button');
      var el = browser.getText('.form__range__output');
      assert(el, 'Cover not included');
  });
});

describe('Level of Cover', function() {
  before(function (done){
    browser
      .url('/income-protection')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('Level of Cover - should update Life Cover based on calculator selections', function(){
    //About You form
    browser
      .click('.icon-male')
      .setValue('input[name="age"]', 53)
      .selectByVisibleText('select#countrystate', 'NSW')
      .click('label[for="non_smoker"]')
      .setValue('input[name="occupation"]', 'Footballer')
      .click('.awesomplete>ul>li>mark')
      .click('button.btn[type="submit"]');
    //Level of cover
    browser
      .scroll(0,400)
      .click('button.fli-level-calculator__button')
    //Cover calculator
      .setValue('input#income', 50000)
      .click('label[for="no_children"]')
      .click('form[name="step-1"] button[type="submit"]')
      .click('label[for="no_home_loan"]')
      .click('label[for="no_debt"]')
      .click('form[name="step-2"] button[type="submit"]')
      .click('#calcLifeCover')
      .click('form[name="step-3"] button[type="submit"]');
      var lc = browser.getText('.form__range__output');
      assert(lc, '$1,800,000');
    });
  it('Level of Cover Results - should display provider results in table', function(){
    browser
      .click('.fli-life-cover>div>button')
    browser
      .element('.fli-portfolios')
      .waitForVisible();
      var table = browser.isVisible('.fli-portfolios');
      assert(table, true);
  });
  it('Level of Cover Results - should display correct user info heading', function(){
    var heading = browser.getText('.fli-results-heading__sub-headline');
    assert(heading, '53 year old man, non-smoker NSW Life Cover');
  });
  it('Level of Cover Results - should filter direct providers', function(){
    browser
      .click('results-filter label')
      var direct = browser.getText('direct-providers>div>p');
      assert(direct, 'Receive a quote with these direct brands and apply');
  });
  it('Level of Cover Results - should uncheck direct providers filter', function(){
    browser
      .click('results-filter label')
      var table = browser.isVisible('results-table .table-sorter');
      assert(table, true);
  });
  it('Level of Cover Results - should display correct life cover amount when selected in calculator', function(){
    var lc = browser.getText('life-cover>div>output>span.show');
    assert(lc, '$1,800,000');
  });
  it('Level of Cover Results - should display default income protection amount when not selected in calculator', function(){
    var ipc = browser.getText('income-protection-cover>div>output>span.show');
    assert(ipc, 'Cover not included');
  });
  it('Level of Cover Results - should display default trauma cover when not selected in calculator', function(){
    var tc = browser.getText('trauma-cover>div>output>span.show');
    assert(tc, 'Cover not included');
  });
  it('Level of Cover Results - should display default total and permanent disability cover when not selected in calculator', function(){
    var tpd = browser.getText('tpd-cover>div>output>span.show');
    assert(tpd, 'Cover not included');
  });
  it('Level of Cover Results - should sort combined monthly premium', function(){
    var monthly1 = browser.getText('li:first-child span.fli-premium-total');
    browser
      .click('.table-sorter button>span');
      var monthly2 = browser.getText('li:first-child span.fli-premium-total');
      assert(monthly2 > monthly1, true)
  });
  it('Level of Cover Results - should expand View details', function(){
    browser
      .click('li:first-child portfolio button.btn-link')
      var lifetab = browser.isVisible('results-table>ul>li:first-child a[name="life"]');
      assert(lifetab, true);
  });
  it('Level of Cover Results - should collapse View details', function(){
    browser
      .click('li:first-child portfolio button.btn-link')
      var lifetab = browser.isVisibleWithinViewport('li:first-child more-info[visible="true"]');
      assert(lifetab, false);
  });
  it('Level of Cover Results - should update results after modifying cover', function(){
    browser
      .scroll(0,400)
      .moveToObject('trauma-cover .noUi-origin', 40)
      .buttonDown()
      .moveToObject('trauma-cover .noUi-origin', 40)
      .buttonUp()
      .click('.fli-results-filter section>button[type="submit"]');
    browser
      .waitForVisible('.fli-portfolios');
    browser
      .click('li:first-child portfolio button.btn-link')
      .click('more-info[visible="true"] a[name="trauma"]')
      var traumaDetails = browser.isVisible('more-info[visible="true"] li:nth-child(2) section')
      assert(traumaDetails, true);
  });
  it('Level of Cover Results - should display per month for income protection cover', function(){
    browser
      .moveToObject('income-protection-cover .noUi-origin', 40)
      .buttonDown()
      .moveToObject('income-protection-cover .noUi-origin', 40)
      .buttonUp()
      var monthly = browser.getText('income-protection-cover .form__range__output');
      assert(monthly, 'per month');
  });
  it('Level of Cover Results - should display No policies when required level of cover doesn\'t have a match', function(){
    browser
      .click('.fli-results-filter section>button[type="submit"]');
    browser
      .waitForVisible('.fli-portfolios');
      var no_fli = browser.getText('.fli-no-results h4');
      assert(no_fli, 'No insurance policies');
  });
});

describe('Cover Calculator', function() {
  before(function (done){
    browser
      .url('/income-protection')
      var elem = browser.element('html.js');
      elem.waitForVisible();
    browser
      .call(done);
  });
  it('Cover Calculator - should check Life Cover for insurer with 200,000 debt ', function(){
    //About You form
    browser
      .click('.icon-female')
      .setValue('input[name="age"]', 29)
      .selectByVisibleText('select#countrystate', 'VIC')
      .click('label[for="smoker"]')
      .setValue('input[name="occupation"]', 'Bank Manager')
      .click('.awesomplete>ul>li>mark')
      .click('button.btn[type="submit"]');
    //Level of cover
    browser
      .scroll(0,400)
      .click('button.fli-level-calculator__button')
    //Cover calculator
      .setValue('input#income', 50000)
      .click('label[for="no_children"]')
      .click('form[name="step-1"] button[type="submit"]')
      .click('label[for="no_home_loan"]')
    //with home debt
      .click('label[for="with_debt"]')
      .setValue('input#debt', 200000)
      .click('form[name="step-2"] button[type="submit"]')
      var lc = browser.getText('label[for="calcLifeCover"] span');
      assert(lc, '$2,000,000');
  });
  it('Cover Calculator - should check Life Cover is equal to Total and Permanent Disability Cover', function(){
    var lc = browser.getText('label[for="calcLifeCover"] span');
    var tpd = browser.getText('label[for="calcTpd"] span');
    assert(lc == tpd);
  });
  it('Level of Cover - should check Income Protection Cover is updated based on calculator', function(){
    browser
      .click('#calcIncome')
      .click('form[name="step-3"] button[type="submit"]');
      var ipc = browser.getText('income-protection-cover .form__range__output')
      assert(ipc, '$4,000 per month');
  });
  it('Level of Cover - should check providers for Income Protection only', function(){
    browser
      .click('.fli-life-cover>div>button');
    browser
      .waitForVisible('.fli-portfolios');
    browser
      .click('li:first-child portfolio button.btn-link')
      var ipc = browser.isVisibleWithinViewport('li:first-child more-info[visible="true"] a');
      assert(ipc, true);
  });
  it('Enquire - should check Enquire form', function(){
    browser
      .click('li:first-child div>button.btn-success')
      var enquireForm = browser.isVisibleWithinViewport('.fli-enquire-form');
      assert(enquireForm, true);
  });
  it('Enquire - should return error on empty fields - Full name', function(){
    browser
      .click('.fli-enquire-form button[type="submit"]')
      var err = browser.getText('form div:first-child span.form__error');
      assert(err, 'Please enter a valid email address');
  });
  it('Enquire - should return error on empty fields - email', function(){
    browser
      .click('.fli-enquire-form button[type="submit"]')
      var err = browser.getText('form div:nth-child(2) span.form__error');
      assert(err, 'Please enter a valid phone number');
  });
  it('Enquire - should return error on empty fields - Phone number', function(){
    browser
      .click('.fli-enquire-form button[type="submit"]')
      var err = browser.getText('form div:nth-child(3) span.form__error');
      assert(err, 'Please enter your date of birth');
  });
  it('Enquire - should return error on empty fields - Date of birth', function(){
    browser
      .click('.fli-enquire-form button[type="submit"]')
      var err = browser.getText('form div:nth-child(4) span.form__error');
      assert(err, 'Please enter your date of birth');
  });
  it('Enquire - should return error on empty fields - Current Income', function(){
    browser
      .click('.fli-enquire-form button[type="submit"]')
      var err = browser.getText('form div:nth-child(5) span.form__error');
      assert(err, 'Please enter your current income');
  });
  it('Enquire - should return error on empty fields - Best time to contact', function(){
    browser
      .click('.fli-enquire-form button[type="submit"]')
      var err = browser.getText('form div:nth-child(6) span.form__error');
      assert(err, 'Please select one');
  });
});
