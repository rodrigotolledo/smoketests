# smoketests

## Getting started
Create a `.env` file based on `.env.template` and fill in appropriate values:

`cp .env.template .env`

## Running tests
To run tests:

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