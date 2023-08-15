const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  arr: [],
  position: 0,

            getLength() {
                return this.position;
            },
            addLink(value) {
                if(value !== '') {
                    value = String(value)
                    this.position++;
                    this.arr.push(`( ${value} )`)
                    
                    return this; 
                } else {
                    return this;
                }                       
            },
            removeLink(position) {
              if(typeof position !== 'number' || !(Number.isInteger(position)) || position <= 0 || position > this.arr.length) {
                this.arr = [];
                this.position = 0;
                throw new Error("You can't remove incorrect link!");
                
            }  else {
                this.position--;
                this.arr.splice(position-1, 1);
                
                return this;
            }             
            },
            reverseChain() {
               
                this.arr.reverse();
                
                return this;
            },
            finishChain() {
              let str = this.arr.join('~~');
              this.arr = [];
              this.position = 0;
              return str;
            }
};

module.exports = {
  chainMaker
};
