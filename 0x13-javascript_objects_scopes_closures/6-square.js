#!/usr/bin/node

const Sq = require('./5-square.js');

class Square extends Sq {
  printC (c) {
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }

  charPrint (c) {
    if (c) { this.printC(c); } else { this.print(); }
  }
}

module.exports = Square;
