#!/usr/bin/node
let n = process.argv[2];
function repeat(n)
{
	for(let i = 0; i < n; i++) {console.log('C is fun');}
}
Number.isNaN(Number(n)) ? console.log('Missing number of occurrences') : repeat(n);
