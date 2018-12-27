# smoketests

## Getting started
Create a `.env` file based on `.env.template` and fill in appropriate values:

`cp .env.template .env`

Example:
```
SELENIUM_HOST=selenium
BASE_URL=https://www.google.com
ENV_TO_TEST=test
```
## Running tests (using Docker containers)
To run tests:

`make smokeTests`

## Running tests (using your local machine with local Chrome)
Install package dependencies:

`npm install`

Install Selenium (**only needed once!**):

`./node_modules/.bin/selenium-standalone install`

Start up Selenium (on a separate command prompt):

`./node_modules/.bin/selenium-standalone start`

In your `.env` file, set `SELENIUM` variable to `docker.for.win.localhost` or `docker.for.mac.localhost` (depending on what OS you're using)

Run tests:

`make smokeTests`


## Framework structure
`pages` - where we define element locators (Page Object approach)

`specs` - where we write tests

`testData` - where we setup test data for different environments (Test, Preprod, Prod, etc)

`results` - where we save screenshots for test executions

`.env` - where we define environment variables (we should *not* commit this file)

`.env.template` - where we define environment variables (this file we should commit)

`docker-compose.yml` - where we define docker images for Selenium and WDIO

`Makefile` - where we define scripts

`wdio.conf.js` - where we keep all WDIO configuration