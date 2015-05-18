(function (module) {
  'use strict';

  // get dependencies
  var webdriver = require('selenium-webdriver');
  var chai = require('chai');

  // cucumber world
  var World = function () {
    this.World = function (callback) {

      // this.whatever becomes available as this.whatever in cucumber steps
      this.expect = chai.expect;
      this.browser = new webdriver.Builder().forBrowser('phantomjs').build();

      // tell cucumber we're done assigning stuff
      callback();
    };
  };

  module.exports = World;
}(module));
