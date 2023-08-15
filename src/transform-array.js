const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
    } 
    let res = [];
    for (let i = 0; i < arr.length; i++) {

      if(i == arr.length - 1 && (arr[i] == '--discard-next' || arr[i] == '--double-next')) {
        return res;
      }
      if(i == arr.length - 1 && (arr[i] == '--discard-prev')) {
          res.pop(arr[i-1]);
          return res;
      }              
      if(i == arr.length - 1 && (arr[i] == '--double-prev')) {
          res.push(arr[i-1]);
          return res;
      }  
          
        if(arr[i] === '--discard-next') {
            if(!String(arr[i+2]).startsWith('--d')) {
                res.push(arr[i+2]);
            }
            i++;
            i++; 
        } else if(arr[i] === '--discard-prev') {
            if(arr[i-1]) {
                res.pop(arr[i+1]);
            }
                res.push(arr[i+1])
                i++;                        
        } else if (arr[i] === '--double-next') {
            res.push(arr[i+1]); 
        } else if (arr[i] === '--double-prev') {
            if(arr[i-1]) {
                res.push(arr[i-1]);
            }
            i++;
            res.push(arr[i]);
        } else {
            res.push(arr[i]);
        }
        
    }
    return res;
}

module.exports = {
  transform
};
