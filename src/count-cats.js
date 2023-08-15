const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  return [].concat(...matrix).reduce((prev, item) => item == '^^' ? prev += 1: prev, 0);
}

module.exports = {
  countCats
};
