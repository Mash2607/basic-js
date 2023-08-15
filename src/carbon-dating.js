const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if(!isNaN(sampleActivity) &&
    (parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) && (typeof sampleActivity == "string")) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
