camelCase object flattener

Flattens objects, arrays by converting it's keys into a camelCase format.

Usage:
```js
// object
const flattener = require('flat-camel');

const objToFormat = {
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

flattener.toCamelCase(objToFormat);

// result
{
  helloPeopleHowAreYou: 'good'
};


// Array with plain literals
const testObject = [{
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

flattener.toCamelCase(testObject);

// result
[{
  helloPeopleHowAreYou: ['good']
}, 'hello', 1, true];
```

