const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} optionsnpm optionsnpm object 
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
 function repeater(str, optionsnpm) {
  let res = '';

  if(!optionsnpm) {
      res = str;
      return res;
  }
  
  getString(str);
  getString(optionsnpm.addition);
  
  if(!optionsnpm.additionSeparator) {
      optionsnpm.additionSeparator = '|';
  }

  if(!optionsnpm.separator) {
      optionsnpm.separator = '+';
  }

  if (optionsnpm.repeatTimes) {
      res = addingASpace(str).repeat(optionsnpm.repeatTimes)
          .split(' ')
          .filter(a => a === str)
          .join(`${optionsnpm.separator}`)
          console.log(res)

          if(optionsnpm.addition) {
              optionsnpm.addition = addingASpace(optionsnpm.addition)
              .repeat(optionsnpm.additionRepeatTimes)
              .split(' ')
              .filter(a => a === optionsnpm.addition)
              .join(`${optionsnpm.additionSeparator}`)
          }
  } else {
      if(optionsnpm.addition) {
          if(optionsnpm.additionRepeatTimes) {
              optionsnpm.addition = addingASpace(optionsnpm.addition)
              .repeat(optionsnpm.additionRepeatTimes)
              .split(' ')
              .filter(a => a === optionsnpm.addition)
              .join(`${optionsnpm.additionSeparator}`)
              res = str + optionsnpm.addition;
          } else {
              res =  str + optionsnpm.addition;
          }
      } else {
          return res;
      }
      
  }

  return res

  function addingASpace (str) {
      str = str + ' ';
      return str;
  }

  function getString(elem) {
      if(typeof elem !== 'String') {
          elem = String(elem);
      }
  }
}

module.exports = {
  repeater
};
