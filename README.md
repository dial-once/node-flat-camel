# node-flat-camel
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
