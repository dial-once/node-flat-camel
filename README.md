# node-flat-camel

[![Sonar](http://proxy.dialonce.net/sonar/api/badges/gate?key=node-flat-camel)](http://sonar.dialonce.net/dashboard?id=node-flat-camel)
[![Sonar](http://proxy.dialonce.net/sonar/api/badges/measure?key=node-flat-camel&metric=ncloc)](http://sonar.dialonce.net/dashboard?id=node-flat-camel)
[![Sonar](http://proxy.dialonce.net/sonar/api/badges/measure?key=node-flat-camel&metric=coverage)](http://sonar.dialonce.net/dashboard?id=node-flat-camel)
[![Sonar](http://proxy.dialonce.net/sonar/api/badges/measure?key=node-flat-camel&metric=code_smells)](http://proxy.dialonce.net/sonar/api/badges/measure?key=node-flat-camel&metric=coverage)
[![Sonar](http://proxy.dialonce.net/sonar/api/badges/measure?key=node-flat-camel&metric=bugs)](http://sonar.dialonce.net/dashboard?id=node-flat-camel)
[![Sonar](http://proxy.dialonce.net/sonar/api/badges/measure?key=node-flat-camel&metric=sqale_debt_ratio)](http://sonar.dialonce.net/dashboard?id=node-flat-camel)

camelCase object flattener

Flattens objects, arrays by converting it's keys into a camelCase format.

## Installation
```
npm install flat-camel
```

## How it works:

#### Object
```js
const flattener = require('flat-camel');

const objectToFormat = {
  hello: {
    people: {
      how: {
        are: {
          you: 'good'
        }
      }
    }
  }
};

flattener.toCamelCase(objectToFormat);

// result
{
  helloPeopleHowAreYou: 'good'
};
```

#### Array
```js
const flattener = require('flat-camel');

const arrayToFormat = [{
  hello: {
    people: {
      how: {
        are: {
          you: ['good']
        }
      }
    }
  }
}, 'hello', 1, true];

flattener.toCamelCase(arrayToFormat);

// result
[{
  helloPeopleHowAreYou: ['good']
}, 'hello', 1, true];
```

## Tests
Requirements:
  - npm
  - make

Run `make deps` once and then `make test` to launch the test suite.

## License
The MIT License [MIT](LICENSE.md)
