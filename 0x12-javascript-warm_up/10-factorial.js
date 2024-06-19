#!/usr/bin/node

const n = Number(process.argv[2]);
function factorial (number) { return isNaN(number) || number === 1 ? 1 : number * factorial(number - 1); }
console.log(factorial(n));
