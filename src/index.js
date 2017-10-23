const flattener = require('flatten-obj')();

// see http://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
// http://jsfiddle.net/WSzec/14/
/* eslint-disable no-use-before-define, no-param-reassign */

module.exports.toCamelCase = (object) => {
  let result = {};

  if (!object) {
    return object;
  }

  if (typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    result = [];
    for (let i = 0; i < object.length; i++) {
      result[i] = module.exports.toCamelCase(object[i]);
    }
  } else {
    // this one converts an object to { key.innerkey: value } format
    const flattenedObj = flattener(object);
    const CHAR_NEXT_TO_DOT = /\../gi;
    // replacing next char after dot (.) with the same but in UpperCase and removing dots
    for (const key of Object.keys(flattenedObj)) {
      let camelCaseKey = key;
      const dots = key.match(CHAR_NEXT_TO_DOT);
      if (Array.isArray(dots)) {
        for (const dot of dots) {
          // get next char after dot, and put it in upperCase
          camelCaseKey = camelCaseKey.replace(new RegExp(`\\${dot}`, 'g'), dot.charAt(1).toUpperCase());
        }
      }
      result[camelCaseKey] = flattenedObj[key];
    }
  }

  return result;
};
