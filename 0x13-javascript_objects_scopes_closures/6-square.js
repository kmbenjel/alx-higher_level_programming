#!/usr/bin/node

const Sq = require('./5-square.js');

class Square extends Sq {
  constructor (size) {
    super(size);
  }

  printC () {
    for (let i = 0; i < this.size; i++) {
      console.log('C'.repeat(this.size));
    }
  }

  charPrint (c) {
    c ? this.printC() : this.print();
  }
}

module.exports = Square;
