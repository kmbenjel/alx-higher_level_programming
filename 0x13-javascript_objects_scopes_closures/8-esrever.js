#!/usr/bin/node

exports.esrever = function (list) {
  const max = list.length;
  const newlist = [];
  for (let i = 0; i < max; i++) { newlist[i] = list[max - i - 1]; }
  return newlist;
};
