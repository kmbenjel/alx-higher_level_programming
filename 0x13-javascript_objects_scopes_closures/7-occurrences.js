#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  return list.reduce((count, item) => count + (item === searchElement ? 1 : 0), 0);
};
