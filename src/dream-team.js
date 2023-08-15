const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if(Array.isArray(members)) {
    return members.filter(item => typeof item === "string")
                  .map(item => item.trim().toUpperCase())
                  .sort()
                  .map(a => a.substr(0,1))
                  .join('');
    } else {
      return false;
    }
}

module.exports = {
  createDreamTeam
};
