(function (module) {
  'use strict';
  var GoogleTitleTestSpec = function () {
    this.Given(/^I am not logged in$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
    });

    this.When(/^I visit google\.com$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
    });

    this.Then(/^I should see Google in the title$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
    });
  };
  module.exports = GoogleTitleTestSpec;
}(module));
