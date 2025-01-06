const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!arr.some((item) => Array.isArray(item))) {
      return 1;
    }
    const depths = arr
      .filter((item) => Array.isArray(item))
      .map((item) => this.calculateDepth(item));
    return 1 + Math.max(...depths);
  }
}

module.exports = {
  DepthCalculator
};
