#!/usr/bin/node

const array = process.argv.slice(2);
const c = array.length;

console.log(c > 1 ? array.sort().reverse()[1] : 0);
