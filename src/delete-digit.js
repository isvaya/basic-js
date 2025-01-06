const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i += 1) {
    let num = +(n.slice(0, i) + n.slice(i + 1));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
