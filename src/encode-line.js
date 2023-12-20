const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i+1]) {
        counter++;
        continue;
      }
      res += counter >= 1 ? String(counter + 1) + str[i] : str[i];
      counter = 0;
  }
  return res;
}

module.exports = {
  encodeLine
};
