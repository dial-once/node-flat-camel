Dial-Once

There is no environment to set up, this module is ready to use.
It flattens data into camel case format.

There is only one function -> camelCase();

Exammples:

```
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
  },
  lolla: 'palooza'
};

flattener.camelCase(objToFormat);

output: {
  helloPeopleHowAreYou: 'good',
  lolla: 'palooza'
}
```

