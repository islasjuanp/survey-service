![](./static/images/logo.png)
# Nests CI/CD Project 
![Test Badge](https://github.com/islasjuanp/nest-cicd/actions/workflows/test.yml/badge.svg)
![Docker Badge](https://github.com/islasjuanp/nest-cicd/actions/workflows/docker-image.yml/badge.svg)
![Audit](https://github.com/islasjuanp/nest-cicd/actions/workflows/audit.yml/badge.svg)

## Description

This project is a CI/CD pipeline implementation for a NestJS application using GitHub Actions. 

The pipeline is designed to automate the process of building, testing, and deploying the application, ensuring that changes are thoroughly tested and safely deployed to production. With this pipeline in place, the development team can focus on writing code, while the pipeline handles the rest, improving efficiency and reducing errors.

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
