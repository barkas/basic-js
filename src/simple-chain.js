const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  items: [],
  getLength() {
    return this.items.length;
  },
  addLink(value) {
    this.items.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.items.length) {
      this.items = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.items.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.items.reverse();
    return this;
  },
  finishChain() {
    let chain = this.items.join('~~');
    this.items = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
