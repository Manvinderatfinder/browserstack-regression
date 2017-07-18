var assert = require('assert');
var ste = require('../pageobjects/ste.page');

//Deals tests

describe('Deals', function() {
  before(function (done){
    ste.openDeals();
    ste.dealsNewsletter.waitForVisible();
    browser.call(done);
  });
  it('should search for deals', function() {
    ste.dealSearch.waitForVisible();
    ste.dealSearch.setValue('asos');
    ste.submitDeals();
    browser.waitUntil(function() {
      return ste.dealsResults.isVisible() == true;
    }, 18000);
    assert(ste.dealsResults.getText() == 'Search results for \"asos\"');
  });
  it('should check search result deals box', function() {
    assert(ste.dealsBox.isVisible());
    browser.back();
  });
  it('should display Top deals', function() {
    ste.dealSearch.waitForVisible();
    browser
      .execute(function() {
        return document.querySelector('.coupon-search-wrapper__links>li:first-child>a').click();
      });
    browser.waitUntil(function () {
      return browser.getUrl().includes('/best-deals') == true;
    }, 18000);
    assert(browser.getUrl().includes('/best-deals'));
    browser.back();
  });
  it('should display deals by brand', function() {
    ste.dealSearch.waitForVisible();
    ste.browseBrandButton.click()
    browser.waitUntil(function() {
      return browser.getUrl().includes('/deals/browse-brands') == true;
    }, 18000);
    assert(browser.getUrl().includes('/deals/browse-brands'));
    browser.back();
  });
  it('should display deals by product', function() {
    ste.dealSearch.waitForVisible();
    ste.browseCategoryButton.click();
    browser.waitUntil(function() {
      return browser.getUrl().includes('/deals/browse') == true;
    }, 18000);
    assert(browser.getUrl().includes('/deals/browse'));
    browser.back();
  });
  it('should search deals in deals custom table', function() {
    ste.dealSearch.waitForVisible();
    ste.dealsTable.scroll();
    var search = ste.store.getText();
    ste.storeSearch.setValue(search)
    browser.waitUntil(function() {
      return ste.storeResults.isVisible() == true;
    }, 18000)
    var text = browser.execute(function() {
      return document.querySelectorAll('.is-even>td:nth-child(2)>div')[0].innerText;
    });
    assert(text.value.includes(search) == true);
    });
  it('should return error when there is no results', function() {
    ste.storeSearch.setValue('asdf');
    assert(ste.storeNoResults.getText() == 'It looks like there are no results for \"asdf\"');
  });
});

//Broadband Plans tests

describe('FBB enter address', function() {
  before(function (done){
    ste.openFbb();
    ste.addressCapture.waitForVisible();
    browser.call(done);
  });
  it('should display entered address for Home plan type', function() {
    ste.addressCapture.setValue('2000 Pacific Highway');
    ste.addressDropdown.waitForVisible();
    ste.submitFbbAddress();
    ste.clickHomePlan();
    browser
      .scroll(0, -80)
    ste.address.waitForVisible();
      assert(ste.address.getText() == '2000 Pacific Hwy, Cowper NSW 2460, Australia');
  });
  it('should show results based address', function() {
    assert(ste.planSummary.getText().includes('based on your address') == true);
  });
  it('should show info that NBN is ready in your area', function(){
    assert(ste.planStatus.getText() == 'We have checked and NBN is ready in your area.');
  });
  it('should be able to edit address', function() {
    ste.fbbReset();
    browser.waitUntil(function() {
      return ste.addressCapture.isVisible() == true;
    }, 18000);
    assert(ste.addressCapture.isVisible());
  });
});

describe('FBB address not found', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openFbb();
    ste.filterBody.waitForVisible();
    browser.call(done);
  });
  it('should display message if NBN is not ready for Business plan type', function(){
    ste.addressCapture.setValue('3000 Hay Street, Haymarket')
    ste.addressDropdown.waitForVisible();
    ste.submitFbbAddress();
    ste.clickBusinessPlan();
    browser
      .scroll(0, -50)
    ste.address.waitForVisible();
    assert(ste.planStatus.getText() == 'NBN is not yet available in your area,');
  });
  it('should display option to search again or compare all plans if NBN is not found', function(){
    assert(ste.addressReset.getText() == '(edit)' && ste.comparePlans.getText() == 'Compare your plans');
  });
  it('should check correct plan type in Advanced tab', function() {
    ste.AdvancedTab.click();
    var bus = browser.isSelected('#business-plan');
    assert(ste.checkboxBusiness.isSelected() && ste.checkboxHome.isSelected() == false);
  });
  it('should be able to search again if NBN is not found', function(){
    ste.fbbReset();
    assert(ste.addressCapture.isVisible());
  });
  it('should compare plans if NBN is not found', function(){
    ste.addressCapture.setValue('3000 Hay Street, Haymarket');
    ste.clickBusinessPlan();
    ste.comparePlans.waitForVisible();
    ste.comparePlans.click();
    assert(ste.planResult.waitForVisible());
  });
});

describe('FBB Filter defaults', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openFbb();
    ste.filterBody.waitForVisible();
    browser.call(done);
  });
  it('should show results for all providers and all connection types', function() {
    var results = browser.getText('.fbb-filters__summary span');
    assert(ste.planSummary.getText().includes('Showing 10') && ste.planSummary.getText().includes('plans for all providers and all connection types.'));
  });
  it('should display filter by default', function(){
    assert(ste.filterBody.isVisible());
  });
  it('should display Plan Details by default', function() {
    var planDetails = browser.getAttribute('section a[name="plan"]', 'class');
    assert(planDetails == 'fbb-accordion-to-tabs__button accordion-to-tabs__button is-tab-active')
  });
  it('Plan Details - should display default price per month', function() {
    assert(ste.pricePlan.getText() == 'Any price');
  });
  it('Plan Details - should display default data usage', function() {
    assert(ste.dataPlanFilter.getText() == 'Any data');
  });
  it('Plan Details - should display default download speed', function() {
    assert(ste.speedPlanFilter.getText() == 'All speeds');
  });
  it('Plan Details - should check  default contract length', function() {
    assert(ste.contractPlan.getText() == '18, 24 months');
  });
  it('Connection types - should check adsl connection type is ticked by default', function(){
    ste.connectionTab.click();
    assert(ste.checkboxAdsl.isSelected());
  });
  it('Connection types - should check nbn connection type is ticked by default', function(){
    assert(ste.checkboxNbn.isSelected());
  });
  it('Connection types - should check mobile connection type is ticked by default', function(){
    assert(ste.checkboxMobile.isSelected());
  });
  it('Connection types - should check cable connection type is ticked by default', function(){
    assert(ste.checkboxCable.isSelected());
  });
  it('Advanced - should check Plan type Home is ticked by default', function(){
    ste.AdvancedTab.click();
    assert(ste.checkboxHome.isSelected());
  });
  it('Advanced - should check Plan type Business is not ticked by default', function(){
    assert(ste.checkboxBusiness.isSelected() == false);
  });
  it('Advanced - should check prioritise participating providers is ticked by default', function(){
    assert(ste.checkboxQuicklinks.isSelected());
  });
  it('Advanced - should check default Upload speed', function() {
    assert(ste.uploadSpeed.getText() == 'All speeds');
  });
});

describe('FBB Filter - Plan Details tab', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openFbb();
    ste.filterBody.waitForVisible();
    browser.call(done);
  });
  it('should hide filter', function() {
    ste.filterButton.click()
    assert(ste.filterForm.isVisibleWithinViewport());
  });
  it('should update hide filter to filter results', function() {
    assert(ste.filterButton.getText() == 'Filter results');
  });
  it('should expand filter', function() {
    ste.filterButton.click()
    assert(ste.filterForm.isVisible() == false);
  });
  it('should update hide filter to filter results', function() {
    assert(ste.filterButton.getText() == 'Hide Filter');
  });
  it('Results - should check results after filtering max price per month', function(){
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 15000);
    // get price per month of first row
    var plan_price = ste.costResult1.getText().replace('$', "");
    // adjust slider
    browser.execute(function(){
      return document.querySelector('price-slider .noUi-origin.noUi-background').setAttribute('style', 'left: 10%');
    })
    ste.pricePlanSlider.click();
    browser
      .waitUntil(function() {
        return ste.pricePlan.getText() != 'Any price';
      }, 18000);
    // get price of slider
    var price2 = ste.pricePlanRange2.getText().replace('$', "");
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 15000);
    // get price of first row after filter
    var filtered = ste.costResult1.getText().replace('$', "");
    assert(Number(plan_price) >= Number(filtered) && Number(price2) >= Number(filtered));
  });
  it('should update price per month range', function(){
    assert(ste.pricePlan.getText() != 'Any price' && ste.pricePlanRange1.getText() == '$0');
  });
  it('should update data usage per month', function(){
    ste.dataPlanSlider.click();
    assert(ste.dataPlanFilter.getText().value != 'Any data');
  });
  it('Results - should sort included data column to ASC order', function() {
    var data1 = ste.dataResult1.getText();
    var min = ste.dataPlanFilter.getText().replace('GB', "");
    ste.dataSort.click();
    browser
      .waitUntil(function() {
        return ste.dataResult1.getText() != data1;
      }, 15000);
    var filtered = ste.dataResult1.getText().replace('GB', "");
    assert(Number(filtered) <= Number(min));
  });
  it('Results - should sort included data column to DESC order', function() {
    var data1 = ste.dataResult1.getText();
    var min = ste.dataPlanFilter.getText().replace('GB', "");
    ste.dataSort.click();
    browser
      .waitUntil(function() {
        return ste.dataResult1.getText() != data1;
      }, 15000);
    var filtered = ste.dataResult1.getText().replace('GB', "");
    assert(filtered == 'Unlimited' || Number(filtered) >= Number(min));
  });
  it('should update download speed', function(){
    ste.speedSlider.click();
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 15000);
    assert(ste.speedPlanFilter.getText().value != 'All speeds');
  });
  it('Results - should check download speed result', function(){
    var speed = ste.speedResult1.getText().replace('Mbps', '').replace('NBN', '');
    assert(Number(speed) >= 25);
  });
  it('should check Contract length', function() {
    ste.contractPlan.click();
    var menu = ste.contractDropdown.isVisible();
    var all = ste.contractAll.isSelected();
    var sel1 = ste.contract1.isSelected();
    var sel2 = ste.contract6.isSelected();
    var sel3 = ste.contract12.isSelected();
    var sel4 = ste.contract18.isSelected();
    var sel5 = ste.contract24.isSelected();
    assert(menu == true && all == false && sel1 == false && sel2 == false && sel3 == false && sel4 == true && sel5 == true);
  });
  it('Results - check contract duration', function() {
    assert(ste.contractResult1.getText() == 18 || ste.contractResult1.getText() == 24);
  });
  it('should update contract duration', function() {
    ste.contract12Label.click();
    ste.contract6Label.click();
    browser
      .waitUntil(function() {
        return ste.loadingSpinner.isExisting() == false;
      }, 18000);
    assert(ste.contractPlan.getText() == '6, 12, 18, 24 months');
  });
  it('Results - should update results after filter', function() {
    var contract = ste.contractResult1.getText();
    assert(contract == 6 || contract == 12 || contract == 18 || contract == 24);
  });
  it('Results - should update selection when all months are selected', function() {
    ste.contract1Label.click();
    browser
      .waitUntil(function() {
        return ste.loadingSpinner.isExisting() == false;
      }, 18000);
    var all = ste.contractAll.isSelected();
    var sel1 = ste.contract1.isSelected();
    var sel2 = ste.contract6.isSelected();
    var sel3 = ste.contract12.isSelected();
    var sel4 = ste.contract18.isSelected();
    var sel5 = ste.contract24.isSelected();
    assert(all && sel1 == false && sel2 == false && sel3 == false && sel4 == false && sel5 == false);
  });
  it('should update menu to All months', function() {
    assert(ste.contractPlan.getText() == 'All months');
  });
  it('Results - should update results when all months are selected', function() {
    var contract = ste.contractResult1.getText();
    assert(contract == 1 || contract == 6 || contract == 12 || contract == 18 || contract == 24);
  });
  it('should update selection to 1 month', function() {
    ste.contract1Label.click();
    browser
      .waitUntil(function() {
        return ste.loadingSpinner.isExisting() == false;
      }, 18000);
    var all = ste.contractAll.isSelected();
    var sel1 = ste.contract1.isSelected();
    var sel2 = ste.contract6.isSelected();
    var sel3 = ste.contract12.isSelected();
    var sel4 = ste.contract18.isSelected();
    var sel5 = ste.contract24.isSelected();
    assert(all == false && sel1 && sel2 == false && sel3 == false && sel4 == false && sel5 == false);
  });
  it('should update menu to 1 month', function() {
    assert(ste.contractPlan.getText() == '1 month');
  });
  it('Results - should update results when 1 month is selected', function() {
    var contract = ste.contractResult1.getText();
    assert(contract == 1 && contract != 6 && contract != 12 && contract != 18 && contract != 24);
  });
  it('should uncheck selection', function() {
    ste.contract1Label.click()
    browser
      .waitUntil(function() {
        return ste.loadingSpinner.isExisting() == false;
      }, 18000);
    var all = ste.contractAll.isSelected();
    var sel1 = ste.contract1.isSelected();
    var sel2 = ste.contract6.isSelected();
    var sel3 = ste.contract12.isSelected();
    var sel4 = ste.contract18.isSelected();
    var sel5 = ste.contract24.isSelected();
    assert(all == false && sel1 == false && sel2 == false && sel3 == false && sel4 == false && sel5 == false);
  });
  it('should update menu to Choose', function() {
    assert(ste.contractPlan.getText() == 'Choose');
  });
  it('should update selection to 6 months', function() {
    ste.contract6Label.click();
    browser
      .waitUntil(function() {
        return ste.loadingSpinner.isExisting() == false;
      }, 18000);
    var all = ste.contractAll.isSelected();
    var sel1 = ste.contract1.isSelected();
    var sel2 = ste.contract6.isSelected();
    var sel3 = ste.contract12.isSelected();
    var sel4 = ste.contract18.isSelected();
    var sel5 = ste.contract24.isSelected();
    assert(all == false && sel1 == false && sel2 && sel3 == false && sel4 == false && sel5 == false);
  });
  it('should update menu to 6 months', function() {
    assert(ste.contractPlan.getText() == '6 months');
  });
  it('Results - should update results when 6 months is selected', function() {
    var contract = ste.contractResult1.getText();
    assert(contract != 1 && contract == 6 && contract != 12 && contract != 18 && contract != 24);
  });
});

describe('FBB Filter - Providers tab', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openFbb();
    ste.filterBody.waitForVisible();
    browser.call(done);
  });
  it('should uncheck provider', function() {
    ste.providerTab.click();
    ste.provider1.click();
    var sel = browser.execute(function(){
      return document.querySelector('.fbb-providers__list--primary>li:first-child>input').checked;
    });
    assert(sel.value == false)
  });
  it('should check provider', function(){
    ste.providerClearAll.click();
    ste.provider2.click()
    var sel = browser.execute(function(){
      return document.querySelector('.fbb-providers__list--primary>li:nth-child(2)>input').checked;
    });
    assert(sel.value == true)
  });
  it('Results - should filter correct provider', function(){
    var provider = browser.execute(function () {
      return document.querySelector('.fbb-providers__list--primary>li:nth-child(2)>label').innerText.split(' ',1);
    });
    browser
      .scroll('plans-header')
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 15000);
    assert(ste.planProviderResult2.getText().includes(provider.value))
  });
});

describe('FBB Filter - Connection types tab', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openFbb();
    ste.filterBody.waitForVisible();
    browser.call(done);
  });
  it('should update summary for 3 connection type', function(){
    ste.connectionTab.click();
    ste.adslLabel.click();
    assert(ste.planSummary.getText().includes('3 connection types'));
  });
  it('should update summary for 2 connection type', function(){
    ste.nbnLabel.click()
    assert(ste.planSummary.getText().includes('2 connection types'));
  });
  it('should update summary for 1 connection type', function(){
    ste.mobileLabel.click()
    assert(ste.planSummary.getText().includes('Cable/Fibre Broadband'));
  }); // add wait for table results
  it('Result - should filter Cable/Fibre Broadband connection type', function(){
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 12000);
    assert(ste.connectionResult1.getText().includes('Cable / Fibre connection'))
  });
  it('Results - should expand Cable/Fibre view details with default plan info tab', function(){
    ste.planSummary.scroll();
    ste.viewDetails1.click();
    assert(ste.viewDetails1Section.isExisting() && ste.planTabSelected.isVisible());
  });
  it('Results - should check plan name and contract duration in plan info tab', function(){
    var plan1 = ste.planProviderResult1.getText();
    var plan2 = ste.planInfoProvider.getText();
    var contract1 = ste.contractResult1.getText();
    var contract2 = ste.planInfoContract.getText().includes(contract1);
    assert(plan1 == plan2 && contract2)
  });
  it('Results - should check Data tab in view details', function(){
    ste.dataTab.click();
    assert(ste.dataTabSelected.isVisible());
  });
  it('Results - should check Fees tab in view details', function(){
    ste.feesTab.click();
    assert(ste.feesTabSelected.isVisible());
  });
  it('Results - should check details in fees tab', function(){
    var fees1 = ste.costResult1.getText();
    var fees2 = ste.feesPlan.getText();
    assert(fees1 == fees2);
  });
  it('Results - should collapse view details', function(){
    ste.viewDetails1.click();
    assert(ste.viewDetails1Section.isExisting() == false);
  });
  it('should update summary for Mobile connection type', function(){
    ste.cableLabel.click();
    ste.mobileLabel.click();
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 12000);
    assert(ste.planSummary.getText().includes('Mobile Broadband'));
  });
  it('Result - should filter Mobile connection type', function(){
    assert(ste.connectionResult1.getText().includes('3G / 4G connection'));
  });
  it('Results - should check category in plan info tab', function(){
    ste.viewDetails1.click();
    var speed1 = ste.speedResult1.getText();
    var speed2 = ste.speedPlan.getText();
    assert(speed1 == speed2);
  });
  it('Results - should check included data in data tab', function(){
      ste.dataTab.click();
      var data1 = ste.dataResult1.getText();
      var data2 = ste.dataPlan.getText();
      assert(data1 == data2);
  });
  it('should update summary for NBN connection type', function(){
    ste.mobileLabel.click();
    ste.nbnLabel.click();
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 12000);
    assert(ste.planSummary.getText().includes('NBN Broadband'));
  });
  it('Result - should filter NBN connection type', function(){
    assert(ste.connectionResult1.getText().includes('NBN connection') == true);
  });
  it('should update summary for ADSL connection type', function(){
    ste.nbnLabel.click();
    ste.adslLabel.click()
    assert(ste.planSummary.getText().includes('ADSL Broadband'));
  });
  it('Result - should filter ADSL connection type', function(){
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 12000);
    assert(ste.connectionResult1.getText().includes('ADSL connection'));
  });
});

describe('FBB Reset Filters', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openFbb();
    ste.filterBody.waitForVisible();
    browser.call(done);
  });
  it('should reset filters in connection types tab', function(){
    browser.execute(function() {
      return document.querySelector('data-slider .noUi-origin.noUi-background').setAttribute('style', 'left: 50%');
    });
    ste.dataPlanSlider.click()
    // update data usage per month
    browser.execute(function() {
      return document.querySelector('download-slider .noUi-origin.noUi-background').setAttribute('style', 'left: 50%');
    })
    ste.speedSlider.click();
    ste.providerTab.click();
    // clear all providers
    ste.providerClearAll.click();
    ste.connectionTab.click();
    // uncheck all connection types except NBN
    ste.adslLabel.click();
    ste.mobileLabel.click();
    ste.cableLabel.click();
    ste.resetFilter.click();
    browser
      .waitUntil(function() {
        return ste.loadingSpinner.isExisting() == false;
      }, 12000);
    var sel1 = ste.checkboxAdsl.isSelected();
    var sel2 = ste.checkboxMobile.isSelected();
    var sel3 = ste.checkboxCable.isSelected();
    assert(sel1 && sel2 && sel3);
  });
  it('should reset filters in plan details tab', function(){
    ste.planTab.click();
    var price = ste.pricePlan.getText().includes('Any price');
    var data = ste.dataPlanFilter.getText().includes('Any data');
    var speed = ste.speedPlanFilter.getText().includes('All speeds');
    assert(price && data && speed);
  });
});

describe('FBB Results - Show more', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openFbb();
    ste.filterBody.waitForVisible();
    browser.call(done);
  });
  it('should check default number of plans', function(){
    ste.connectionTab.click();
    ste.nbnLabel.click();
    ste.mobileLabel.click();
    ste.cableLabel.click();
    browser
      .waitUntil(function(){
        return ste.loadingSpinner.isExisting() == false;
      }, 12000);
    ste.lastResult.scroll();
    assert(ste.resultSummary.getText().includes(10));
  });
  it('should show more plans after clicking show more', function(){
    var res1 = ste.resultSummary.getText();
    browser
      .click('show-more button')
      .waitUntil(function() {
        return ste.showMoreButton.isVisibleWithinViewport() == false;
      }, 12000);
    ste.lastResult.scroll();
    var res2 = ste.resultSummary.getText();
    assert(res2 != res1 && res2 == 20);
  });
});

//NBN tracker map tests

describe('NBN tracker status: Connected', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openNbntracker();
    ste.addressNbn.waitForVisible();
    browser.call(done);
  });
  it('should track address', function() {
    ste.addressNbn.setValue(['125 Cranbourne Street, Riverstone', "\uE004"]);
    ste.addressNbnDropdown.waitForVisible();
    ste.addressNbnDropdown.click();
    browser
      .waitUntil(function(){
        return ste.nbnInfobox.isVisible() == true;
      }, 18000);
      var address = browser.execute(function(){
        return document.querySelector('input#address').value;
      });
      assert(address.value.includes('125 Cranbourne St, Riverstone NSW 2765'));
  });
  it('should display correct address in url', function() {
    var url = browser.getUrl();
    var num = url.includes(125);
    var rd = url.includes('Cranbourne');
    var locality = url.includes('Riverstone');
    var postcode = url.includes(2765);
    assert(num && rd && locality && postcode);
  });
  it('should check default plan type', function() {
    assert(browser.getUrl().includes('placeType=Home'));
  });
  it('should check connected address status', function() {
    browser
      .waitUntil(function() {
        return ste.nbnHeader.isVisible() == true;
      }, 10000);
    assert(ste.nbnHeader.getText().includes('CONNECTED'));
  });
  it('should check correct address in infobox', function() {
    var address = ste.infoboxAddress.getText();
    var num = address.includes(125);
    var rd = address.includes('CRANBOURNE');
    var locality = address.includes('RIVERSTONE');
    var state = address.includes('NSW');
    assert(num && rd && locality && state);
  });
  it('should collapse infobox', function() {
    ste.nbnHeader.click();
    assert(ste.nbnBody.isVisible());
  });
  it('should expand infobox', function() {
    ste.nbnHeader.click();
    var infobox = browser.isVisible('.nbn-slider.closed');
    assert(ste.nbnBody.isVisible() == false);
  });
  it('should check More technical info', function() {
    ste.nbnInfoTooltip.click();
    var fda = browser.getText('address .nbn-tooltip p:nth-child(7)').replace('ADA: ', "").substr(0, 4);
    var date = browser.getText('.nbn-def-list>dl:first-child>dd');
    //var type = browser.getText('.nbn-def-list>dl:last-child>dd');
    ste.moreTechInfo.click()
    browser
      .waitUntil(function() {
        return browser.getUrl().includes('/nbn-tracker/rollout/') == true;
      }, 15000);
    browser
      .click('ul.nav>li:nth-child(2)>a')
      .scroll('ul.nav')
    var fda2 = browser.getUrl().includes(fda);
    var region = browser.getText('#details tbody>tr:first-child>td').includes(fda);
    var date2 = browser.getText('#details tbody>tr:nth-child(3)>td').includes(date);
    assert(fda2 == true && region == true && date2 == true);
    browser
      .back();
  });
  it('should check url after clicking find out more button', function() {
    browser
      .waitUntil(function() {
        return ste.findOutMore.isVisible() == true;
      }, 20000);
    ste.findOutMore.click();
    browser
      .waitUntil(function() {
        return browser.getUrl().includes('broadband-plans') == true;
      }, 12000);
    var url = browser.getUrl();
    var num = url.includes(125);
    var rd = url.includes('Cranbourne');
    var locality = url.includes('Riverstone');
    var postcode = url.includes(2765);
    assert(num == true && rd == true && locality == true && postcode == true);
  });
  it('should check url placeType based on nbn-tracker address', function() {
    var url = browser.getUrl();
    var placeType = url.includes('placeType=Home');
    assert(placeType == true);
    browser
      .back();
  });
  //should check correct address in fbb after tracking result
});

describe('NBN tracker status: Connected status for Satellite rollout type', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openNbntracker();
    ste.addressNbn.waitForVisible();
    browser.call(done);
  });
  it('should check Satellite providers', function() {
    ste.addressNbn.setValue(['210 Garlicks Range Road', "\uE004"]);
    ste.addressNbnDropdown.waitForVisible();
    ste.addressNbnDropdown.click();
    browser
      .waitUntil(function(){
        return ste.nbnInfobox.isVisible() == true;
      }, 18000);
    ste.findOutMore.click()
    browser
      .waitUntil(function() {
        return ste.filterBody.isVisibleWithinViewport() == true;
      }, 18000);
    browser
    //  .scroll('#fbb-filters__controller')
      .waitUntil(function() {
        return ste.loadingSpinner.isExisting() == false;
      }, 12000);
    browser
      .execute(function() {
        return document.querySelector('li:nth-child(2) .fbb-accordion-to-tabs__button-text').click();
      });
    ste.showAllProviders.click()
    var prov1 = browser.getAttribute('input[id="4529"]', 'checked');
    var prov2 = browser.getAttribute('input[id="3931"]', 'checked');
    var prov3 = browser.getAttribute('input[id="3495"]', 'checked');
    assert(prov1 == 'true' && prov2 == 'true' && prov3 == 'true');
  });
  // check providers have technology type
});

describe('NBN tracker status: In progress', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openNbntracker();
    ste.addressNbn.waitForVisible();
    browser.call(done);
  });
  it('should track address', function() {
    ste.addressNbn.setValue(['17 Royal Oaks Dr, Tarneit VIC 3029', "\uE004"]);
    browser
      .waitUntil(function() {
        return browser.isVisible('form>ul>li:first-child>a') == true;
      }, 18000);
    ste.addressNbnDropdown.click();
    browser
      .waitUntil(function(){
        return ste.nbnInfobox.isVisible() == true;
      }, 18000);
      var address = browser.execute(function(){
        return document.querySelector('input#address').value;
      });
      assert(address.value.includes('17 Royal Oaks Dr, Tarneit VIC 3029') == true);
  });
  it('should display correct address in url', function() {
    var url = browser.getUrl();
    var num = url.includes(17);
    var rd = url.includes('Royal');
    var locality = url.includes('Tarneit');
    var postcode = url.includes(3029);
    assert(num == true && rd == true && locality == true && postcode == true);
  });
  it('should check in progress address status', function() {
    browser
      .waitUntil(function() {
        return ste.nbnHeader.isVisible() == true;
      }, 18000);
    assert(ste.nbnHeader.getText().includes('IN PROGRESS') == true);
  });
  it('should check correct address in infobox', function() {
    var address = browser.getText('address>div>span.show');
    var num = address.includes(17);
    var rd = address.includes('ROYAL OAKS DR');
    var locality = address.includes('TARNEIT');
    var state = address.includes('VIC');
    assert(num == true && rd == true && locality == true && state == true);
  });
  it('should check correct status: In progress', function() {
    ste.notifyMe.click();
    browser
      .waitUntil(function() {
        return ste.notifyBody.isVisible() == true;
      }, 20000);
    assert(ste.notifyHeader.getText() == 'IN PROGRESS')
  });
  it('should check close', function(){
    ste.notifyClose.click()
    assert(ste.notifyBody.isVisible() == false);
  });
  it('should open Notify me when ready link', function() {
    ste.notifyLink.click();
    assert(ste.notifyBody.isVisible() == true);
  });
});

describe('NBN tracker status: 3 year plan', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openNbntracker();
    ste.addressNbn.waitForVisible();
    browser.call(done);
  });
  it('should track address', function() {
    ste.addressNbn.setValue(['Shoalhaven Heads Rd, NSW 2535', "\uE004"]);
    ste.addressNbnDropdown.waitForVisible();
    ste.addressNbnDropdown.click();
    browser
      .waitUntil(function(){
        return ste.nbnInfobox.isVisible() == true;
      }, 18000);
      var address = browser.execute(function(){
        return document.querySelector('input#address').value;
      });
    assert(address.value.includes('Shoalhaven Heads Rd, Shoalhaven Heads NSW 2535') == true);
  });
  it('should display correct address in url', function() {
    var url = browser.getUrl();
    var rd = url.includes('Shoalhaven');
    var postcode = url.includes(2535);
    assert(rd == true && postcode == true);
  });
  it('should check 3 year plan address status', function() {
    browser
      .waitUntil(function() {
        return ste.nbnHeader.isVisible() == true;
      }, 12000);
    assert(ste.nbnHeader.getText().includes('PART OF 3 YEAR PLAN') == true);
  });
  it('should check correct address in infobox', function() {
    var address = browser.getText('address>div>span.show');
    var rd = address.includes('SHOALHAVEN HEADS RD');
    var locality = address.includes('SHOALHAVEN HEADS');
    var state = address.includes('NSW');
    assert(rd == true && locality == true && state == true);
  });
  it('should check nbn message', function() {
    var message = ste.infoboxText.getText().includes('is expected to commence construction in some parts of this suburb within 3 years.')
    assert(message == true);
  });
  it('should check Notify me when ready', function() {
    ste.notifyMe.click();
    browser
      .waitUntil(function() {
        return ste.notifyBody.isVisible() == true;
      }, 20000);
    assert(ste.notifyHeader.getText() == 'PART OF 3 YEAR PLAN');
  });
});

describe('NBN tracker status: Adequately Served', function() {
  before(function (done){
    browser.deleteCookie();
    ste.openNbntracker();
    ste.addressNbn.waitForVisible();
    browser.call(done);
  });
  it('should track address', function() {
    ste.addressNbn.setValue(['21 Jabez Way, Blakeview SA', "\uE004"]);
    ste.addressNbnDropdown.waitForVisible();
    ste.addressNbnDropdown.click();
    browser
      .waitUntil(function(){
        return ste.nbnInfobox.isVisible() == true;
      }, 18000);
    var address = browser.execute(function(){
      return document.querySelector('input#address').value;
    });
    assert(address.value.includes('21 Jabez Way, Blakeview SA') == true);
  });
  it('should check adequately served address status', function() {
    assert(ste.nbnHeader.getText().includes('ADEQUATELY SERVED') == true);
  });
  it('should check More Info', function() {
    ste.moreInfo.click()
    var url = browser.waitUntil(function() {
        return browser.getUrl().includes('adequately-served-areas') == true;
      }, 18000);
    assert(url == true);
  });
});
/** update address
describe('NBN tracker status: In preparation', function() {
  before(function (done){
    browser
      .url('/nbn-tracker/map?address')
      .waitForVisible('input#address');
    browser
      .call(done);
  });
  it('should check in preparation status', function() {
    browser
      .setValue('input#address', '31/35 Adamson St, Blakeview SA 5114')
      .waitUntil(function() {
        return browser.isVisible('.pac-container>.pac-item') == true;
      }, 18000);
    browser
      .click('.pac-container>.pac-item')
      .click('.nbn-map__search-form-actions>button:first-child')
      .waitUntil(function(){
        return ste.nbnInfobox.isVisible() == true;
      }, 18000);
    assert(ste.nbnHeader.getText().includes('IN PREPARATION') == true);
  });
  it('should check Notify me when ready', function() {
    browser
      ste.findOutMore.click()
      .waitUntil(function() {
        return ste.notifyMe.isVisible() == true;
      }, 20000);
    var notify = browser.getText('div[aria-hidden="false"] h3.fbb-modal-box__header-text');
    assert(notify == 'NO SERVICE INFO');
  });
})
*/
