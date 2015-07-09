/*eslint new-cap:0*/
/*global browser */
module.exports = function () {
  this.Given(/^I am not logged in$/, function (next) {
    next();
  });

  this.When(/^I visit google\.com$/, function (next) {
    // visit a page (baseUrl is set in wdio.conf.js)
    browser.url('/');
    // tell cucumber this test passes
    next();
  });

  this.Then(/^I should see Google in the title$/, function (next) {

    // get the page title
    var _this = this;
    browser.getText('body').
      then(function(value) {
        _this.expect(value).to.match(/Google/);
      }).call(next);
  });
};
