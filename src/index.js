const flattener = require('flatten-obj')();

// see http://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
// http://jsfiddle.net/WSzec/14/
/* eslint-disable no-use-before-define, no-param-reassign */
function loop(cur, prop, result, exclusions) {
  let isEmpty = true;

  for (const p in cur) {
    if (Object.prototype.hasOwnProperty.call(cur, p)) {
      isEmpty = false;
      recurse(cur[p], prop ? `${prop}.${p}` : p, result, exclusions);
    }
  }

  if (isEmpty && Array.isArray(cur)) {
    result[prop] = [];
  } else if (isEmpty && !Array.isArray(cur)) {
    result[prop] = {};
  }
}

function recurse(cur, prop, result, exclusions) {
  if (exclusions.includes(prop)) return;

  if (Object(cur) !== cur) {
    if (cur !== undefined) {
      result[prop] = cur;
    }
  } else {
    loop(cur, prop, result, exclusions);
  }
}

module.exports = function (data, exclusions) {
  const result = {};

  exclusions = exclusions || [];

  recurse(data, '', result, exclusions);
  return result;
};

module.exports.camelCase = (obj) => {
  const result = {};
  // this one converts an obj to { key.innerkey: value } format
  const flattenedObj = flattener(obj);
  // replacing next char after dot (.) with the same but in UpperCase and removing dots
  for (const key of Object.keys(flattenedObj)) {
    const value = flattenedObj[key];
    let camelCaseKey = '';
    const regex = /\./gi;
    // if key contains dot
    if (regex.exec(key)) {
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
