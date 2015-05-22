(function (module) {
  'use strict';

  module.exports = function () {
    this.Given(/^I am not logged in$/, function (next) {
      next();
    });

    this.When(/^I visit google\.com$/, function (next) {
      // visit a page
      this.page = this.getPage('http://google.com');
      // tell cucumber this test passes
      next();
    });

    this.Then(/^I should see Google in the title$/, function (next) {

      // get the page title
      this.page.title(function (error, title) {

        var pageTitle = title.value;

        // if this test fails it will throw an error, stopping execution
        this.expect(pageTitle).to.equal('Google');

        // tell cucumber this test passes
        next();

      }.bind(this));
    });
  };
}(module));
