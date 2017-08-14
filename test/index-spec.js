const flattener = require('../src/index.js');
const assert = require('assert');

describe('flattener camelCase', () => {
  it('should flatten object to camel-case style', () => {
    const testObject = {
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
    const flat = flattener.camelCase(testObject);
    assert.deepEqual(flat, { helloPeopleHowAreYou: 'good', lolla: 'palooza' });
  });
});
