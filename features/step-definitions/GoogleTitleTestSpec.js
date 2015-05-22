(function (module) {
  'use strict';

  var GoogleTitleTestSpec = function () {
    this.Given(/^I am not logged in$/, function (callback) {
      callback();
    });

    this.When(/^I visit google\.com$/, function (callback) {
      // visit a page
      this.page = this.getPage('http://google.com');
      // tell cucumber this test passes
      callback();
    });

    this.Then(/^I should see Google in the title$/, function (callback) {

      // get the page title
      this.page.title(function (error, title) {
        var pageTitle = title.value;
        if (pageTitle == 'Google') {
          // tell cucumber this test passes
          callback();
        } else {
          // tell cucumber this test fails
          callback.fail(new Error('Title was not Google, it was ' + pageTitle));
        }
      });
    });
  };
  module.exports = GoogleTitleTestSpec;
}(module));
