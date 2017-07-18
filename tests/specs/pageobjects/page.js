function page () {
  this.title = 'Finder AU Page';
}
page.prototype.open = function (path) {
  browser
    .url('/' + path)
    .waitForVisible('html.js');
};

module.exports = new page();
