const flattener = require('flatten-obj')();

// see http://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
// http://jsfiddle.net/WSzec/14/
/* eslint-disable no-use-before-define, no-param-reassign */

module.exports.camelCase = (obj) => {
  const result = {};
  // this one converts an obj to { key.innerkey: value } format
  const flattenedObj = flattener(obj);
  // replacing next char after dot (.) with the same but in UpperCase and removing dots
  for (const key of Object.keys(flattenedObj)) {
    const value = flattenedObj[key];
    let camelCaseKey = '';
    const HAS_DOT_REGEX = /\./gi;
    if (HAS_DOT_REGEX.exec(key)) {
      for (let i = 0; i < key.length; i++) {
        // if dot
        if (key.charAt(i) === '.') {
          // get next char after dot, and put it in upperCase
          camelCaseKey += key.charAt(i + 1).toUpperCase();
          // jump over the dot and that upperCased character
          i++;
          continue; // eslint-disable-line no-continue
        }
        camelCaseKey += key.charAt(i);
      }
    } else {
      camelCaseKey = key;
    }
    result[camelCaseKey] = value;
  }

  return result;
};
