Dial-Once

There is no environment to set up, this module is ready to use.
It flattens object literal into camel case format.

A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces (sources: http://www.dyn-web.com/tutorials/object-literal/)

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

