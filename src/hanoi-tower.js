const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
            obj.turns = 2**disksNumber - 1;
            obj.seconds = Math.floor(obj.turns / (turnsSpeed / 3600)) 
            return obj;
}

module.exports = {
  calculateHanoi
};
