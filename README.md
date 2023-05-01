![](./static/images/logo.png)
# Survey Service 
![Test Badge](https://github.com/islasjuanp/survey-service/actions/workflows/test.yml/badge.svg)
![Docker Badge](https://github.com/islasjuanp/survey-service/actions/workflows/docker-image.yml/badge.svg)
![Audit](https://github.com/islasjuanp/survey-service/actions/workflows/audit.yml/badge.svg)

## Description

The survey service utilizes NestJS framework, MongoDB database, and GraphQL to provide a streamlined and efficient way for users to create, manage, and analyze surveys.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# Running with docker
$ npm run docker:start 

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

## Test

```bash
# unit tests
$ npm run test

# Starting docker dependencies + e2e tests
$ npm run docker:start:dependencies
$ npm run test:e2e

# e2e tests with docker
$ npm run docker:test

# test coverage
$ npm run test:cov
```
