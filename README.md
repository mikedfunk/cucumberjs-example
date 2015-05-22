# Cucumberjs example
Just a simple implementation of [cucumberjs](https://github.com/cucumber/cucumber-js) with [phantomjs](http://phantomjs.org/) and [webdriverio](http://webdriver.io).

## Usage
* `npm install` to install dependencies
* `./node_modules/.bin/phantomjs --webdriver=4444` to start phantomjs
* `./node_modules/.bin/cucumber-js` to run tests

## Usage in other projects
* `npm init` and hit enter a bunch
* `npm install --save-dev cucumber phantomjs webdriverio`
* create a `features` directory and write [gherkin](http://docs.behat.org/en/latest/guides/1.gherkin.html) features there
* `./node_modules/.bin/cucumber-js` to run tests. It will give you snippets from your features to put in spec files. You can put them in `features/step-definitions/WhateverSpec.js`. Each spec file needs to contain an exported function via module.exports, CommonJs style. Put snippets in that function. ([example here](https://github.com/mikedfunk/cucumberjs-example/blob/master/features/step-definitions/GoogleTitleTestSpec.js))
* add a [cucumber world file](https://github.com/mikedfunk/cucumberjs-example/blob/master/features/support/world.js) in `features/support/world.js` to set up the browser and assertion lib in all tests.
* start phantomjs and run tests per usage instructions above.
* Replace  `callback.pending();` calls with [webdriverio](http://webdriver.io) api calls to go to urls, click things, etc.
* When a test passes, run `callback()`. When it fails, run `callback.fail(Error('My error message'))`. You can make wrappers around these to improve grammar in `world.js`.
