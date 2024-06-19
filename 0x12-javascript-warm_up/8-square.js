#!/usr/bin/node
const n = Number(process.argv[2]);
function square (n) {
  for (let i = 0; i < n; i++) {
    console.log('X'.repeat(n));
  }
}
isNaN(n) ? console.log('Missing size') : square(n);
