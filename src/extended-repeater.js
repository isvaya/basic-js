const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strString = str !== undefined ? String(str) : 'null';
  const additionString =
    options.addition !== undefined ? String(options.addition) : '';
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const repeatedAddition = Array(additionRepeatTimes)
    .fill(additionString)
    .join(additionSeparator);
  const fullString = strString + repeatedAddition;
  return Array(repeatTimes).fill(fullString).join(separator);
}

module.exports = {
  repeater
};
