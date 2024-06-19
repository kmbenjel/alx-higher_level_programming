#!/usr/bin/node

let array = process.argv.slice(2);
let c = array.length;

console.log(c > 1 ? array.sort().reverse()[1] : 0);

