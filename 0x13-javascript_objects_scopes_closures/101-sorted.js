#!/usr/bin/node

const dict = require('./101-data').dict;

const occurrences = [...new Set(Object.values(dict).map(String))];

const idsByOccurrences = function (num) {
  return Object.keys(dict).filter(key => dict[key] === num);
};

const _new = occurrences.reduce((acc, key) => {
  acc[key] = idsByOccurrences(Number(key));
  return acc;
}, {});

console.log(_new);
