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
    const flat = flattener.toCamelCase(testObject);
    assert.deepEqual(flat, { helloPeopleHowAreYou: 'good', lolla: 'palooza' });
  });

  it('should flatten arrays to camel-case style', () => {
    const testObject = [{
      hello: {
        people: {
          how: {
            are: {
              you: ['good']
            }
          }
        }
      },
      lolla: 'palooza'
    }];
    const flat = flattener.toCamelCase(testObject);
    assert.deepEqual(flat, [{ helloPeopleHowAreYou: [ 'good'], lolla: 'palooza' }]);
  });

  it('should flatten arrays to camel-case style [plain literals]', () => {
    const testObject = [{
      hello: {
        people: {
          how: {
            are: {
              you: ['good']
            }
          }
        }
      },
      lolla: 'palooza'
    },
    'hello',
    1,
    true];
    const flat = flattener.toCamelCase(testObject);
    assert.deepEqual(flat, [{ helloPeopleHowAreYou: [ 'good'], lolla: 'palooza' }, 'hello', 1, true]);
  });

  it('should not convert booleans', () => {
    const result = flattener.toCamelCase(true);
    assert.equal(result, true);
  });

  it('should not convert numbers', () => {
    const result = flattener.toCamelCase(1);
    assert.equal(result, 1);
  });

  it('should not convert strings', () => {
    const result = flattener.toCamelCase('hello');
    assert.equal(result, 'hello');
  });

  it('should not convert undefined, null, NaN', () => {
    let result = flattener.toCamelCase(undefined);
    assert.equal(result, undefined);
    result = flattener.toCamelCase(null);
    assert.equal(result, null);
    result = flattener.toCamelCase(NaN);
    assert.equal(isNaN(result), true);
  });
});
