var page = require('./page');
var assert = require('assert');
var mny = require('../pageobjects/money.page');

var moneyPage = Object.create(page, {
    // Fin AU
    loanPanel: {
        get: function() {
            return $('a[href="#panel-loans"]');
        }
    },
    loanIcon: {
        get: function() {
            return $('i.hp-icon-home-loans');
        }
    },
    loanAmount: {
        get: function() {
            return $('select.form__select.js-switch-action > option:nth-child(2)');
        }
    },
    loanAmountValue: {
        get: function() {
            return $('[name="calc_amount"]');
        }
    },
    interestPeriod: {
        get: function() {
            return $('[name ="calc_period"] option[value="60"]');
        }
    },
    showLoans: {
        get: function() {
            return $('#panel-hl input[value="Get started"]');
        }
    },
    fhlInterestEarned: {
        get: function() {
            return $('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        }
    },
    fhlInterestEarnedValue: {
        get: function() {
            return $('.calculator-table  tbody tr:nth-child(1) .string-bottom');
        }
    },
    fhlCalAmountValue: {
        get: function() {
            return $('[name="hlPrincipal"]');
        }
    },
    fplLoanIcon: {
        get: function() {
            return $('#panel-loans i.hp-icon-personal-loans');
        }
    },
    fplLoanAmount: {
        get: function() {
            return $('#panel-pl #amount');
        }
    },
    fplInterestPeriod: {
        get: function() {
            return $('#panel-pl #years > option:nth-child(5)');
        }
    },
    fplShowLoans: {
        get: function() {
            return $('#panel-pl input[value="Get started"]');
        }
    },
    tableCal: {
        get: function() {
            return $('.js-comparison-calculator');
        }
    },
    calAmountValue: {
        get: function() {
            return $('#amount');
        }
    },
    fclLoanIcon: {
        get: function() {
            return $('#panel-loans i.hp-icon-car-loans');
        }
    },
    fclLoanAmount: {
        get: function() {
            return $('#panel-cl #amount');
        }
    },
    fclInterestPeriod: {
        get: function() {
            return $('#panel-cl #years > option:nth-child(5)');
        }
    },
    fclShowLoans: {
        get: function() {
            return $('#panel-cl input[value="Get started"]');
        }
    },
    ccfPanel: {
        get: function() {
            return $('.homepage__masthead a[href="#panel-credit-cards"]');
        }
    },
    btIcon: {
        get: function() {
            return $('i.hp-icon-balance-transfer');
        }
    },
    btAmount: {
        get: function() {
            return $('*[name="ccf_balance_to_transfer"]');
        }
    },
    btInterest: {
        get: function() {
            return $('*[name="ccf_current_int_rate"]');
        }
    },
    btShowCards: {
        get: function() {
            return $('input.btn.btn-secondary');
        }
    },
    btCalValue: {
        get: function() {
            return $('#tab1732 [name="ccf_balance_to_transfer"]');
        }
    },
    searchIcon: {
        get: function() {
            return $('.homepage__masthead a[href="#panel-search"]');
        }
    },
    hpSearch: {
        get: function() {
            return $('.form-search--widget input[name="q"]');
        }
    },
    search: {
        get: function() {
            return $('#panel-search button[type="submit"]');
        }
    },
    searchResult: {
        get: function() {
            return $('.gsc-result-info');
        }
    },
    searchResultContent: {
        get: function() {
            return $('.gsc-results.gsc-webResult');
        }
    },
    btTable: {
        get: function() {
            return $('.js-comparison-calculator');
        }
    },
    btInterestEarned: {
        get: function() {
            return $('tr:nth-child(1) > td.comparison-table__feature > .js-calculator-table-value > .text-x-large');
        }
    },
    calculatorButton: {
        get: function() {
            return $('.calculator-form >.btn-secondary');
        }
    },
    pageJs: {
        get: function() {
            return $('html.js');
        }
    },
    hpDropdown: {
        get: function() {
            return $('.select-nav__trigger.js-select-nav__trigger');
        }
    },
    dropdownList: {
        get: function() {
            return $('.select-nav__list__item');
        }
    },
    dropdownContent: {
        get: function() {
            return $('ul.select-nav__list');
        }
    },
    firstComparebox: {
        get: function() {
            return $('tr:nth-child(1) label');
        }
    },
    secondComparebox: {
        get: function() {
            return $('tr:nth-child(2) label');
        }
    },
    compareBar: {
        get: function() {
            return $('.compare-bar');
        }
    },
    compareButton: {
        get: function() {
            return $('button.compare-bar__compare-button');
        }
    },
    compareInfobox: {
        get: function() {
            return $('.i_infobox.product_infobox');
        }
    },
    commentaryBox: {
        get: function() {
            return $('.latest-commentary__trigger');
        }
    },
    commentaryContent: {
        get: function() {
            return $('.latest-commentary__content');
        }
    },
    advanceSearchBtn: {
        get: function() {
            return $('.js-filter-button');
        }
    },
    loanPurpose: {
        get: function() {
            return $('[name ="hlPurpose"] option[value="loan_purpose"]');
        }
    },
    offsetAccount: {
        get: function() {
            return $('input[name="hl_product_mortgage_offset"][type="radio"][value="0"]');
        }
    },
    loanType: {
        get: function() {
            return $('input[name="hl_product_loan_type"][type="radio"][value="variable"]');
        }
    },
    moreInfo: {
        get: function() {
            return $('.js-compare-bar tr:nth-child(2) a.comparison-table__more-button');
        }
    },
    productTemplate: {
        get: function() {
            return $('#right-sidebar');
        }
    },
    calPeriod: {
        get: function() {
            return $('[name ="years"]');
        }
    },
    calButton: {
        get: function() {
            return $('.form-widget--calculator > .btn.btn-secondary');
        }
    },
    calInterestSaved: {
        get: function() {
            return $('tbody > tr:nth-child(1) > td.comparison-table__feature.calculator-data.string-bottom > .js-calculator-table-value');
        }
    },
    offsetBoxes: {
        get: function() {
            return $('.offsetboxes');
        }
    },
    comments: {
        get: function() {
            return $('#comments');
        }
    },
    tableMoreInfo: {
        get: function() {
            return $('tbody > tr:nth-child(2) > td.comparison-table__cta > div > a.comparison-table__more-button');
        }
    },
    prosCons: {
        get: function() {
            return $('a=Pros & Cons');
        }
    },
    prosContent: {
        get: function() {
            return $('.f_container_proscons_pros');
        }
    },
    consContent: {
        get: function() {
            return $('.f_container_proscons_cons');
        }
    },
    detailsTab: {
        get: function() {
            return $('a=Details');
        }
    },
    reviewInfobox: {
        get: function() {
            return $('.defaultInfobox');
        }
    },
    heroRates: {
        get: function() {
            return $('.hero-rates');
        }
    },
    heroDesc: {
        get: function() {
            return $('.hero-rates__features');
        }
    },
    heroBulletPoint: {
        get: function() {
            return $('.hero-rates__list');
        }
    },
    heroLogo: {
        get: function() {
            return $('.hero-rates__logo');
        }
    },
    heroFeature: {
        get: function() {
            return $('.hero-rates__standout-features');
        }
    },
    heroSecurityImage: {
        get: function() {
            return $('.hero-rates__security');
        }
    },
    heroCtaButtons: {
        get: function() {
            return $('.hero-rates__cta');
        }
    },
    ffMoreInfo: {
        get: function() {
            return $('tr:nth-child(1) > td.comparison-table__cta > .comparison-table__cellWrapper > .comparison-table__view-details-button');
        }
    },
    expanderContent: {
        get: function() {
            return $('tbody > tr:nth-child(1) > td.comparison-table__expander.js-comparison-table__expander.show');
        }
    },

    leadFormButton: {
        get: function() {
            return $('.lead-form__enquire-now');
        }
    },
    residencyStatusNo: {
        get: function() {
            return $('#residency_check > .luna-form__selectionGroup > .luna-form__selection:nth-child(2) > label');
        }
    },
    residencyStatusYes: {
        get: function() {
            return $('#residency_check > .luna-form__selectionGroup > .luna-form__selection:nth-child(1) > label');
        }
    },
    firstNameError: {
        get: function() {
            return $('#lgo-form > .luna-form__group:nth-child(2) > .luna-form__field:nth-child(1) > span.luna-form__feedback');
        }
    },
    lastNameError: {
        get: function() {
            return $('#lgo-form > .luna-form__group:nth-child(2) > .luna-form__field:nth-child(2) > span.luna-form__feedback');
        }
    },
    phoneError: {
        get: function() {
            return $('#lgo-form > .luna-form__group:nth-child(3) > .luna-form__field:nth-child(1) > span.luna-form__feedback');
        }
    },
    emailError: {
        get: function() {
            return $('#lgo-form > .luna-form__group:nth-child(3) > .luna-form__field:nth-child(2) > span.luna-form__feedback');
        }
    },
    suburbError: {
        get: function() {
            return $('#lgo-form > .luna-form__group:nth-child(4) > .luna-form__field:nth-child(1) > span.luna-form__feedback');
        }
    },
    postcodeError: {
        get: function() {
            return $('#lgo-form > .luna-form__group:nth-child(4) > .luna-form__field:nth-child(2) > span.luna-form__feedback');
        }
    },
    amountError: {
        get: function() {
            return $('#lgo-form > .luna-form__group:nth-child(5) > div.luna-form__field.is-invalid > span.luna-form__feedback');
        }
    },
    leadFormProviderLogo: {
        get: function() {
            return $('.lead-form__provider-logos');
        }
    },
    leadFormProviderImage: {
        get: function() {
            return $('.lead-form__provider-image');
        }
    },
    leadFormTC: {
        get: function() {
            return $('.lead_form__disclaimer > .finder-accordion > h3');
        }
    },
    aussieTC: {
        get: function() {
            return $('#accordion-aussiehomeloans');
        }
    },



    // Fin US
    globalFlag: {
        get: function() {
            return $('.header-sitewide__flag');
        }
    },
    minCreditScore: {
        get: function() {
            return $('[name ="pl_product_us_minimum_credit_score"] option[value="739"]');
        }
    },
    resState: {
        get: function() {
            return $('[name ="us_states_list_codes"] option[value="OH"]');
        }
    },
    tableCta: {
        get: function() {
            return $('tbody > tr:nth-child(1) > td.comparison-table__cta');
        }
    },
    cookieBtn: {
        get: function() {
            return $('.cookie-footer__button > .btn--ghost');
        }
    },
    selecttionBtn: {
        get: function() {
            return $('#selectionButton');
        }
    },
    ccCompareSection: {
        get: function() {
            return $('#niche-creditCards');
        }
    },
    mtCompareSection: {
        get: function() {
            return $('#niche-moneyTransfer');
        }
    },
    plCompareSection: {
        get: function() {
            return $('#niche-personalLoans');
        }
    },
    blCompareSection: {
        get: function() {
            return $('#niche-businessLoans');
        }
    },
    finUsSearch: {
        get: function() {
            return $('#site-search');
        }
    },
    errorMessage: {
        get: function() {
            return $('.luna-form__feedback');
        }
    },
    formLoanAmount: {
        get: function() {
            return $('#loan_amount');
        }
    },
    usFplFilterModal: {
        get: function() {
            return $('.usplf-widget');
        }
    },
    usFplFilterContent: {
        get: function() {
            return $('.usplf-widget.js-table-quiz__panel > .usplf-widget__content');
        }
    },
    usFplFilterButton: {
        get: function() {
            return $('a=Let\'s get started');
        }
    },
    usFplFilterCreditScore: {
        get: function() {
            return $(' .usplf-widget__content  > .usplf-widget__body  >  .usplf-widget__credit-score  > .luna-form__selectionGroup');
        }
    },

    noCreditScore: {
        get: function() {
          return $('a=I don\'t know my score');
        }
    },
    getCreditScoreTitle: {
        get: function() {
            return $('.usplf-widget__content > .usplf-widget__body > h2.usplf-widget__title');
        }
    },
    backToQuiz: {
        get: function() {
            return $('a=Back to quiz');
        }
    },












    /**
     * define or overwrite page methods
     */
    openFinder: {
        value: function() {
            page.open.call(this, '');
        }
    },
    openBtPage: {
        value: function() {
            page.open.call(this, 'credit-cards/balance-transfer-credit-cards');
        }
    },
    fplReviewPage: {
        value: function() {
            page.open.call(this, 'ratesetter-p2p-loan');
        }
    },
    openCCF: {
        value: function() {
            page.open.call(this, 'credit-cards');
        }
    },
    openHomeLoans: {
        value: function() {
            page.open.call(this, 'home-loans');
        }
    },
    openFMT: {
        value: function() {
            page.open.call(this, 'foreign-exchange');
        }
    },
    openPersonalLoans: {
        value: function() {
            page.open.call(this, 'personal-loans');
        }
    },
    openFrequentFlyer: {
        value: function() {
            page.open.call(this, 'credit-cards/compare-frequent-flyer-cards');
        }
    },
    openAussieForm: {
        value: function() {
            page.open.call(this, 'mortgage-brokers/aussie-mortgage-brokers');
        }
    },
    // function for table compare
    tableCompare: {
        value: function() {
            this.secondComparebox.click();
            this.compareBar.waitForVisible();
            this.firstComparebox.click();
            this.compareButton.click();
            this.compareInfobox.waitForVisible();
            // check if product infobox is loading
            assert(this.compareInfobox.isVisible() == true);

        }
    },
    //FINUS
    openFinus: {
        value: function() {
            page.open.call(this, '');
        }
    },
    openFinusFPL: {
        value: function() {
            page.open.call(this, 'personal-loans');
        }
    },
    openFinusIMT: {
        value: function() {
            page.open.call(this, 'international-money-transfers');
        }
    },
    openFinusIns: {
        value: function() {
            page.open.call(this, 'insurance');
        }
    },
    openFinusCreditCards: {
    value: function() {
        page.open.call(this, 'credit-cards');
    }
},

});



module.exports = moneyPage;
