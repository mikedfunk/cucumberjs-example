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
    var that = this;
    browser.getTitle().
      then(function(value) {
        console.log("value", value);
        that.expect(value).to.equal('Google');
      }).call(next);
  });
};
