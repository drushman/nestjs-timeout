[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Steps to replicate
```bash
# start application
$ npm run start:dev

# make a request
$ curl http://0.0.0.0:3000

# after 1 second -> it responsed {"statusCode":408,"message":"Request Timeout"}
# after 5 second -> it sprinted `Logic has been executed`

```
