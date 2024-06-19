#!/usr/bin/node
const arg = process.argv[2];
console.log(arg && !Number.isNaN(Number(arg)) ? `My number: ${Math.floor(arg)}` : 'Not a number');
