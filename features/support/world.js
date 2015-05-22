(function (module) {
  'use strict';

  // get dependencies
  var webdriverio = require('webdriverio');


  // cucumber world
  var World = function () {
    this.World = function (callback) {

      /**
       * save the currently visited page
       * @type {object}
       */
      this.page = null;

      // specify browser for webdriverio
      var webdriverOptions = {
          desiredCapabilities: {
              browserName: 'phantomjs'
          }
      };

      // this.whatever becomes available as this.whatever in cucumber steps
      this.browser = webdriverio.remote(webdriverOptions).init();

      /**
       * get a page by url
       * @param {string} urlj
       * @return {object} webdriverio instance
       */
      this.getPage = function (url) {
        return this.browser.url(url);
      };
 

      // tell cucumber we're done assigning stuff
      callback();
    };
  };

  module.exports = World;
}(module));
