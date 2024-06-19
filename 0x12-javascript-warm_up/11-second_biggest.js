#!/usr/bin/node

const array = process.argv.slice(2).map(Number);
const c = array.length;

console.log(c > 1 ? array.sort((a, b) => a - b)[c - 2] : 0);
