# Cucumberjs example
Just a simple implementation of cucumberjs with phantomjs, selenium-webdriver, and chai.

## Usage
* `npm install` to install dependencies
* `./node_modules/.bin/phantomjs --webdriver=4444` to start phantomjs
* `./node_modules/.bin/cucumber-js` to run tests

## Usage in other projects
* `npm init` and hit enter a bunch
* `npm install --save-dev cucumber phantomjs chai selenium-webdriver`
* create a `features` directory and write gherkin features there
* add a [cucumber world file](https://github.com/mikedfunk/cucumberjs-example/blob/master/features/support/world.js) in `features/support/world.js` to set up the browser and assertion lib in all tests.
* `./node_modules/.bin/cucumber-js` to run tests. It will give you snippets to put in spec files. You can put them in `features/step-definitions/WhateverSpec.js`. Each spec file needs to contain an exported function via module.exports, CommonJs style. Put snippets in that function.
* start phantomjs and run tests per above
* Replace  `callback.pending();` calls with selenium-webdriver api calls to go to urls, click things, etc. check values with chai.expect;
