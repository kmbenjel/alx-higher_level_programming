#!/usr/bin/node

const fs = require('fs');

const [,, fileA, fileB, fileC] = process.argv;

const data1 = fs.readFileSync(fileA, 'utf8');
const data2 = fs.readFileSync(fileB, 'utf8');
fs.writeFileSync(fileC, data1 + data2, 'utf8');
