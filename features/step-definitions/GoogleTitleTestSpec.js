/*eslint new-cap:0*/
/*global browser */
module.exports = function () {
  this.Given(/^I am not logged in$/, function (next) {
    next();
  });

  this.When(/^I visit google\.com$/, function (next) {
    // visit a page (baseUrl is set in wdio.conf.js)
    browser.url('/').then(function() {
      // tell cucumber this test passes
      next();
    });
  });

  this.Then(/^I should see Google in the title$/, function (next) {

    // get the page content
    browser.getText('body').

      // this is a promise so we can do .then()
      then(function(value) {

        // use chai to check that the content contains Google. Will throw an
        // exception and be considered a failure on the cli if it fails.
        this.expect(value).to.match(/Google/);

        // next() doesn't work within the promise for some reason but this does
      }.bind(this)).call(next);
  });
};
