#!/usr/bin/node

const Sq = require('./5-square.js');

class Square extends Sq {
  constructor (size) { super(size); this.size = size; }
  printC (c) {
    for (let i = 0; i < this.size; i++) {
      console.log(c.repeat(this.size));
    }
  }

  charPrint (c) {
    if (c) { this.printC(c); } else { this.print(); }
  }
}

module.exports = Square;
