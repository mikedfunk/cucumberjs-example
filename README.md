# Cucumberjs example
Just a simple implementation of
[cucumberjs](https://github.com/cucumber/cucumber-js) with
[phantomjs](http://phantomjs.org/), [chai](http://chaijs.com), and
[webdriverio](http://webdriver.io).

## Usage
* `npm install` to install dependencies
* `./node_modules/.bin/phantomjs --webdriver=4444` to start phantomjs
* `./node_modules/.bin/wdio` to run tests. It will use the `wdio.conf.js` config file by default.

## Usage in other projects
* `npm init` and hit enter a bunch
* `npm install --save-dev cucumber phantomjs webdriverio chai`
* `./node_modules/.bin/wdio config` to walk through a wizard and define your
  webdriverio config. Sweet!
* create a `features` directory and write
  [gherkin](http://docs.behat.org/en/latest/guides/1.gherkin.html) features
  there
* `./node_modules/.bin/wdio` to run tests. It will give you
  snippets from your features to put in spec files. You can put them in
  `features/step-definitions/WhateverSpec.js`. Each spec file needs to contain
  an exported function via module.exports, CommonJs style. Put snippets in that
  function. ([example
  here](https://github.com/mikedfunk/cucumberjs-example/blob/master/features/step-definitions/GoogleTitleTestSpec.js))
* add a [cucumber world
  file](https://github.com/mikedfunk/cucumberjs-example/blob/master/features/support/world.js)
  in `features/support/world.js` to set up chai in all tests. If you want.
* Replace  `callback.pending();` calls with [webdriverio
  api calls](http://webdriver.io/api.html) to go to urls, click things, etc. By running cucumber through wdio
  you get `browser` defined as a global, so you can just call
  `browser.url('sub-url here').then(...)`,
  `browser.getText('selector').then(...)`, etc. inside your spec definitions. ([full api docs](http://webdriver.io/api.html))
* Replace `callback` in the function params with `next`. It makes a lot more
  sense.
* Assert with `this.expect(value).to.equal(expected);`. Chai has [other
  tests](http://chaijs.com/api/) too. When a test fails, it will throw an Error
  and stop that step. Call `next()` after all expectations are set. The only
  way I could get next working in promises was via `.then(...).call(next);`. If
  all passes it will continue to the next step definition.
* start phantomjs and run tests per usage instructions above.

## Gotchas
In a step definition this will cause trouble because the next step will try to
execute whether or not the browser has finished loading the page. You will
probably encounter a race condition. Instead, use the promise `.then()` method:

```javascript
module.exports = function() {

  this.When(/^I visit the homepage$/, function (next) {
    // bad!
    browser.url('/');
    next();

    // good!
    browser.url('/').then(function() { next(); });
  });
};
```

`this` from `world.js` is available in each step definition, but once you get
to a promise or callback from the webdriverio api `this` is something different.
Fix it with the `.bind(this)` part below:
```javascript
browser.getText('form[name="register"]').then(function(text) {
  this.expect(text).to.not.be.empty;
}.bind(this)).call(next);
```

I've also had problems with PhantomJS and JSPM. The PhantomJS browser crashes
when it encounters JSPM. I just run it in a real browser instead. Apparently
PhantomJS uses an old version of webkit that does not work with Traceur and 
probably Babel either. [Github issue
here](https://github.com/google/traceur-compiler/issues/908).

Don't call `next()` twice in a step! It will confuse cucumber and confuse the shit out of you because steps will be firing out of sequence, even in the wrong scenarios. Took me forever to find this.
