module.exports = require('.../conf/default.js');

var assert = require('assert');

describe('FTI links', function() {
  it('check links', function(done) {    
    browser
      .url('https://www.finder.com.au');
    elem = browser.element('html.js');
      elem.waitForVisible(4000);

    var el = browser.elements('a[href*=https]');
    var link = el.getAttribute('href');
      //console.log(link);

    link.forEach(function (li){
      console.log(li);
        browser
          .url(li)
        browser.execute(function(){
          return document.readyState;
        });
        browser
          .back()
    });
      /**
      var linkSize = browser.execute(function(){
        return $('a[href*=https]').size();
      }); 
      console.log(linkSize.value); 
      */
      /**
    browser
      .click('a[href*=https]');
    var resp = browser.execute(function(){
        return document.readyState;
      });
      */
  });
});
