#!/usr/bin/node

const list = require('./100-data').list;
console.log(list);
const _new = list.map((n, i) => i * n);
console.log(_new);
