(function (module) {
  var webdriverio,
  chai,
  World;

  // get dependencies
  webdriverio = require('webdriverio');
  chai = require('chai');

  // cucumber world
  World = function () {
    this.World = function (next) {

      // this.whatever becomes available as this.whatever in cucumber steps

      /**
       * the chai assertion lib
       * @type {object}
       */
      this.expect = chai.expect;

      // tell cucumber we're done assigning stuff
      next();
    };
  };

  module.exports = World;
}(module));
