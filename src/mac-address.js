const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nArr = n.split('-');
  if (nArr.length !== 6) return false;
  for (let i = 0; i < nArr.length; i += 1) {
    if (nArr[i].length !== 2) return false;
    for (let j = 0; j < nArr[i].length; j += 1) {
      const char = nArr[i][j];
      if (!(char >= '0' && char <= '9') && !(char >= 'A' && char <= 'F')) {
        return false;
      }
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
