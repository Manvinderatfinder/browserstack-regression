var page = require('./page');

var stePage = Object.create(page, {
  // deals
  dealsNewsletter: { get: function () { return $('.join-deals-box'); } },
  dealSearch: { get: function () { return $('#site-deals-search'); } },
  findDeals: { get: function () { return $('#coupon-search'); } },
  dealsResults: { get: function () { return $('h6'); } },
  dealsBox: { get: function () { return $('.has-padding-bottom-large'); } },
  topDealsButton: { get: function () { return $('.coupon-search-wrapper__links>li:first-child'); } },
  browseBrandButton: { get: function () { return $('.coupon-search-wrapper__links>li:nth-child(2)'); } },
  browseCategoryButton: { get: function () { return $('.coupon-search-wrapper__links>li:nth-child(3)'); } },
  dealsTable: { get: function () { return $('.deals_custom_table'); } },
  store: { get: function () { return $('tbody>tr:nth-child(4)>td:nth-child(2)>div'); } },
  storeSearch: { get: function () { return $('#search'); } },
  storeResults: { get: function () { return $('form[name="compareForm"]'); } },
  storeNoResults: { get: function () {return $('.js-table-no-result'); } },
  // fbb
  addressCapture: { get: function () { return $('.fbb-address-capture__form-content input'); } },
  addressDropdown: { get: function () { return $('.pac-container div:first-child'); } },
  homePlanType: { get: function () { return $('.fbb-address-capture__form-actions>button:first-child'); } },
  businessPlanType: { get: function () { return $('.fbb-address-capture__form-actions>button:nth-child(2)'); } },
  address: { get: function () { return $('.fbb-address-capture__address'); } },
  planSummary: { get: function () { return $('.fbb-filters__summary span'); } },
  planStatus: { get: function () { return $('.fbb-address-capture__nbn-status-text strong'); } },
  addressReset: { get: function () { return $('.fbb-reset-form'); } },
  comparePlans: { get: function () { return $('.btn--nbn-modal'); } },
  notifyLink: { get: function () { return $('.fbb-address-capture__nbn-status-text a'); } },
  // fbb filters
  filterButton: { get: function () { return $('#fbb-filters__controller button'); } },
  filterForm: { get: function () { return $('.fbb-filters.fbb-is-shown'); } },
  filterBody: { get: function () { return $('.fbb-filters__body'); } },
  planTab: { get: function () { return $('ul>li:nth-child(1)>a>span.fbb-accordion-to-tabs__button-text'); } },
  pricePlan: { get: function () { return $('price-slider strong:nth-child(2)'); } },
  pricePlanRange1: { get: function () { return $('price-slider output>strong:nth-child(3)'); } },
  pricePlanRange2: { get: function () { return $('price-slider output>strong:nth-child(4)'); } },
  pricePlanSlider: { get: function () { return $('price-slider .noUi-origin.noUi-background'); } },
  dataPlanFilter: { get: function () { return $('data-slider strong'); } },
  dataPlanSlider: { get: function () { return $('data-slider .noUi-origin.noUi-background'); } },
  dataSort: { get: function () { return $('ul>li:nth-child(1).table-sorter__list-4-item'); } },
  speedPlanFilter: { get: function () { return $('download-slider strong'); } },
  speedSlider: { get: function () { return $('download-slider .noUi-origin.noUi-background'); } },
  contractPlan: { get: function () { return $('contract-length button'); } },
  contractDropdown: { get: function () { return $('#dropdown-menu-1'); } },
  contractAll: { get: function () { return $('#contact-All-all'); } },
  contract1: { get: function () { return $('#contact-1-0'); } },
  contract1Label: { get: function () { return $('#dropdown-menu-1 label[for="contact-1-0"]'); } },
  contract6: { get: function () { return $('#contact-6-1'); } },
  contract6Label: { get: function () { return $('#dropdown-menu-1 label[for="contact-6-1"]'); } },
  contract12: { get: function () { return $('#contact-12-2'); } },
  contract12Label: { get: function () { return $('#dropdown-menu-1 label[for="contact-12-2"]'); } },
  contract18: { get: function () { return $('#contact-18-3'); } },
  contract24: { get: function () { return $('#contact-24-4'); } },
  providerTab: { get: function () { return $('ul>li:nth-child(2)>a>span.fbb-accordion-to-tabs__button-text'); } },
  provider1: { get: function () { return $('.fbb-providers__list--primary>li:first-child>label'); } },
  provider2: { get: function () { return $('.fbb-providers__list--primary>li:nth-child(2)>label'); } },
  providerClearAll: { get: function () { return $('provider-filter button:nth-child(3)'); } },
  showAllProviders: { get: function () { return $('provider-filter>section>div>button'); } },
  connectionTab: { get: function () { return $('ul>li:nth-child(3)>a>span.fbb-accordion-to-tabs__button-text'); } },
  checkboxAdsl: { get: function () { return $('#adsl-0'); } },
  adslLabel: { get: function () { return $('li:first-child>[for="adsl-0"]'); } },
  checkboxNbn: { get: function () { return $('#nbn-1'); } },
  nbnLabel: { get: function () { return $('li:nth-child(2)>[for="nbn-1"]'); } },
  checkboxMobile: { get: function () { return $('#mobile-2'); } },
  mobileLabel: { get: function () { return $('li:nth-child(3)>[for="mobile-2"]'); } },
  checkboxCable:{ get: function () { return $('#cable-4'); } },
  cableLabel: { get: function () { return $('li:nth-child(4)>[for="cable-4"]'); } },
  AdvancedTab: { get: function () { return $('ul>li:nth-child(4)>a>span.fbb-accordion-to-tabs__button-text'); } },
  checkboxBusiness: { get: function () { return $('#business-plan'); } },
  checkboxHome: { get: function () { return $('#home-plan'); } },
  checkboxQuicklinks: { get: function () { return $('#quick-links'); } },
  uploadSpeed: { get: function () { return $('upload-slider strong'); } },
  resetFilter: { get: function () { return $('.fbb-reset-filters'); } },
  // table results
  loadingSpinner: { get: function () { return $('plans-table loading-spinner'); } },
  planResult: { get: function () { return $('.results-table'); } },
  costResult1: { get: function () { return $('li:first-child .results-table__keydetails-amount'); } },
  dataResult1: { get: function () { return $('li:first-child div:nth-child(3) li:nth-child(1)>span'); } },
  speedResult1: { get: function () { return $('li:first-child li:nth-child(2) .results-table__keydetails-value'); } },
  contractResult1: { get: function () { return $('li:first-child li:nth-child(3)>span'); } },
  planProviderResult1: { get: function () { return $('plans-table li:first-child h2'); } },
  planProviderResult2: { get: function () { return $('plans-table li:nth-child(2) h2'); } },
  connectionResult1: { get: function () { return $('li:first-child div:nth-child(2)>ul>li:first-child>span'); } },
  lastResult: { get: function () { return $('li:last-child article'); } },
  resultSummary: { get: function () { return $('.table-tools__showing'); } },
  showMoreButton: { get: function () { return $('show-more button'); } },
  // view details
  viewDetails1: { get: function () { return $('li:first-child .results-table__cta button'); } },
  viewDetails1Section: { get: function () { return $('info-list[visible="true"]'); } },
  planTabSelected: { get: function () { return $('info-list[visible="true"] #tab-1.is-selected-tab'); } },
  planInfoProvider: { get: function () { return $('info-list[visible="true"] #tab-1 dl:first-child>dd'); } },
  planInfoContract: { get: function () { return $('info-list[visible="true"] #tab-1 dl:nth-child(3)>dd'); } },
  dataTab: { get: function () { return $('info-list[visible="true"] [name="data"]'); } },
  dataTabSelected: { get: function () { return $('info-list[visible="true"] #tab-2.is-selected-tab'); } },
  feesTab: { get: function () { return $('info-list[visible="true"] [name="fees"]'); } },
  feesTabSelected: { get: function () { return $('info-list[visible="true"] #tab-3.is-selected-tab'); } },
  feesPlan: { get: function () { return $('info-list[visible="true"] #tab-3 dl:first-child>dd'); } },
  speedPlan: { get: function () { return $('info-list[visible="true"] #tab-1 dl:nth-child(4)>dd'); } },
  dataPlan: { get: function () { return $('info-list[visible="true"] #tab-2 dl:first-child>dd'); } },
  // nbn-tracker
  addressNbn: { get: function () { return $('[name="address"]'); } },
  addressNbnDropdown: { get: function () { return $('form>ul>li:first-child>a'); } },
  nbnInfobox: { get: function () { return $('#map-infobox'); } },
  nbnHeader: { get: function () { return $('#map-infobox h2'); } },
  infoboxAddress: { get: function () { return $('address>div>span.show'); } },
  infoboxText: { get: function () { return $('.nbn-slider .nbn-infobox__column__text'); } },
  nbnBody: { get: function () { return $('.nbn-slider.closed'); } },
  nbnInfoTooltip: { get: function () { return $('address button.btn-link'); } },
  moreTechInfo: { get: function () { return $('.nbn-slider>article>div>a.btn-link'); } },
  moreInfo: { get: function () { return $('.nbn-infobox__column>a'); } },
  findOutMore: { get: function () { return $('.nbn-slider>article>div>a.btn'); } },
  notifyMe: { get: function () { return $('article a'); } },
  notifyMeButton: { get: function () { return $('.form__group-subscription-modal .btn__content'); } },
  notifyDate: { get: function () { return $('.fbb-modal-box__status-text>strong:nth-child(2)'); } },
  notifyHeader: { get: function () { return $('div[aria-hidden="false"] h3.fbb-modal-box__header-text'); } },
  notifyFnameError: { get: function () { return $('#nbn-subscription-fname-error'); } },
  notifyLnameError: { get: function () { return $('#nbn-subscription-lname-error'); } },
  notifyEmailError:  { get: function () { return $('#nbn-subscription-email-error'); } },
  notifyClose: { get: function () { return $('div[aria-hidden="false"] .close.fbb-modal-box__cross'); } },
  notifyBody: { get: function () { return $('[aria-hidden="false"] .fbb-modal-box__body-subscription'); } },
  /**
   * define or overwrite page methods
   */
  openDeals: { value: function() {
    page.open.call(this, 'deals');
  } },

  openFbb: { value: function() {
    page.open.call(this, 'broadband-plans');
  } },

  openNbntracker: { value: function() {
    page.open.call(this, 'nbn-tracker');
  } },

  submitDeals: { value: function() {
    this.findDeals.click();
  } },

  fbbReset: { value: function() {
    this.addressReset.click();
  } },

  submitFbbAddress: { value: function() {
    this.addressDropdown.click();
  } },

  clickHomePlan: { value: function() {
    this.homePlanType.click();
  } },

  clickBusinessPlan: { value: function() {
    this.businessPlanType.click();
  } },

  submit: { value: function() {
    this.submitButton.click();
  } }
});

module.exports = stePage;
