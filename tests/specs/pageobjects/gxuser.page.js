var page = require('./page');
var gxuser = require('../pageobjects/gxuser.page');

var gxuserPage = Object.create(page, {
    userLogin: {
        get: function() {
            return $('.user-login');
        }
    },
    loginButton: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] button[name="submit"]');
        }
    },
    emailErrorMsg: {
        get: function() {
            return $('#signin-email-feedback');
        }
    },
    passErrorMsg: {
        get: function() {
            return $('#signin-password-feedback');
        }
    },
    forgetPwd: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] button.user-login-btn--link');
        }
    },
    forgetPwdText: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] form legend.luna-legend');
        }
    },
    forgetPwdEmail: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] #user-login-signin-email');
        }
    },
    forgetPwdBtn: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] button.luna-button>.btn__content');
        }
    },
    forgetPwdBtn: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] button.luna-button>.btn__content');
        }
    },
    navHeaderLogin: {
        get: function() {
            return $('.header-navbar__login.js-user-login-component');
        }
    },
    navLogin: {
        get: function() {
            return $('.btn-nav.btn-nav--login');
        }
    },
    navLoginBox: {
        get: function() {
            return $('#user-login');
        }
    },
    signInTab: {
        get: function() {
            return $('#tabpanel-1 > a.luna-tab__action');
        }
    },
    userEmail: {
        get: function() {
            return $('#user-login-signin-email');
        }
    },
    userPwd: {
        get: function() {
            return $('#user-login-signin-password');
        }
    },
    signinBtn: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] button[name="submit"]');
        }
    },
    signinTxt: {
        get: function() {
            return $('.large-extra-info');
        }
    },
    navLoginBtn: {
        get: function() {
            return $('.header-navbar__login>button');
        }
    },
    loginBar: {
        get: function() {
            return $('.user-logged-in');
        }
    },
    logoutBtn: {
        get: function() {
            return $('.user-logged-in>ul>li:nth-child(2)>a');
        }
    },
    myProfileBtn: {
        get: function() {
            return $('.user-logged-in>ul>li:nth-child(1)>a');
        }
    },
    userLoginBox: {
        get: function() {
            return $('#tabpanel-1 > a.luna-tab__action');
        }
    },
    creditScoreSignin: {
        get: function() {
            return $('#tabpanel-1 > a.luna-tab__action');
        }
    },
    creditScoreEmail: {
        get: function() {
            return $('input#user-login-signin-email.luna-input');
        }
    },
    creditScorePwd: {
        get: function() {
            return $('input#user-login-signin-password.luna-input');
        }
    },
    creditScoreSigninBtn: {
        get: function() {
            return $('div[aria-labelledby="tabpanel-1"] button[name="submit"]');
        }
    },
    creditScore: {
        get: function() {
            return $('.results-summary__score-number');
        }
    },
    creditScoreBnr: {
        get: function() {
            return $('.credit-check-results__banner');
        }
    },
    creditScoreDate: {
        get: function() {
            return $('.results-summary__top-right-label');
        }
    },
    previewScore: {
        get: function() {
            return $('a=view previous score');
        }
    },
    scoreDialer: {
        get: function() {
            return $('.luna-dangerdial__countup');
        }
    },
    pastCreditScore: {
        get: function() {
            return $('.user-profile-score-history__item.user-profile-score-history__item--past');
        }
    },
    currentCreditScore: {
        get: function() {
            return $('.user-profile-score-history__item.user-profile-score-history__item--current');
        }
    },
    futureScore: {
        get: function() {
            return $('.user-profile-score-history__item.user-profile-score-history__item--future');
        }
    },
    creditScoreStats: {
        get: function() {
            return $('.user-profile-stats');
        }
    },
    bbAddressBar: {
        get: function() {
            return $('.address-capture');
        }
    },
    bbAddress: {
        get: function() {
            return $('input.form__input-text.fbb-address-capture__form-input');
        }
    },
    bbPlan: {
        get: function() {
            return $('.fbb-address-capture__form-actions>button:first-child');
        }
    },
    bbAddresStatus: {
        get: function() {
            return $('.fbb-address-capture__nbn-status-text');
        }
    },
    notifyMe: {
        get: function() {
            return $('#nbn-status-bar > p > span > a.btn-link--brand.nbn-status-bar--link');
        }
    },
    bbSubscriptionModal: {
        get: function() {
            return $('.sitewide-login-modal-box--nbn > div.modal-box__body.fbb-modal-box__body-subscription');
        }
    },
    profileNBNTrack: {
        get: function() {
            return $('a=My NBN Tracker');
        }
    },
    profileAddressDetail: {
        get: function() {
            return $('.user-profile__nbn-address-details');
        }
    },
    changeAddress: {
        get: function() {
            return $('a=Change address');
        }
    },
    addresschangeModal: {
        get: function() {
            return $('.fbb-modal-box__change-address');
        }
    },
    closeModal: {
        get: function() {
            return $('div.modal-box__close > button.close.fbb-modal-box__cross > i.icon-cross');
        }
    },
    closeSignupModal: {
        get: function() {
            return $('div.modal-box__close.js-sitewide-login-modal-close > button.close.fbb-modal-box__cross > i.icon-cross');
        }
    },
    userProfileContainer: {
        get: function() {
            return $('.user-profile__container');
        }
    },




    //function for existing user
    existingUserLogin: {
        value: function() {
            this.navLogin.click();
            this.navLoginBox.waitForVisible();
            this.signInTab.click();
            this.userEmail.setValue('tester1@hiveempire.com');
            this.userPwd.setValue('test123#');
            this.signinBtn.click();
        }
    },

    //function to logout user
    userLogout: {
        value: function() {
            this.navLoginBtn.click();
            this.logoutBtn.click();
        }
    },


    /**
     * define or overwrite page methods
     */

    openUserSignin: {
        value: function() {
            page.open.call(this, 'user-profile/sign-in');
        }
    },
    openFinHome: {
        value: function() {
            page.open.call(this, '');
        }
    },
    openCreditScore: {
        value: function() {
            page.open.call(this, 'credit-score');
        }
    },
    openBroadband: {
        value: function() {
            page.open.call(this, 'broadband-plans');
        }
    },
    openNBNTrack: {
        value: function() {
            page.open.call(this, 'user-profile/nbn-tracker');
        }
    },

});

// function for gxuser signin

module.exports = gxuserPage;
