const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const nameCounts = {};
  for (let i = 0; i < names.length; i += 1) {
    let name = names[i];
    if (nameCounts[name]) {
      let suffix = nameCounts[name];
      while (result.includes(`${name}(${suffix})`)) {
        suffix += 1;
      }
      name = `${name}(${suffix})`;
      nameCounts[names[i]] += 1;
    }
    result.push(name);
    nameCounts[name] = 1;
  }
  return result;
}

module.exports = {
  renameFiles
};
