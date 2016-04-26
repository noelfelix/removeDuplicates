"use strict"

function removeDuplicates (list) {
  var cache = {};
  var results = [];

  for (var i = 0; i < list.length; i++) {
    if (cache[list[i]] === undefined){
      cache[list[i]] = list[i];
      results[results.length] = list[i];
    };
  }
  console.log(list.length, results.length)
  return results;
}

function timeTest (func, testCount) {
  var start;
  var args = [];
  if (arguments.length > 2) {
    for (var i = 2; i < arguments.length; i++) {
      args[args.length] = arguments[i];
    }

    start = new Date();
    for (var i = 0; i < testCount; i++) {
      func.apply(null, args);
    }
  } else {
    start = new Date();
    for (var i = 0; i < testCount; i++) {
      func.call(null);
    }
  }
  return new Date() - start;
}

var testList = [];
for (var i = 0; i < 1000000; i++) {
  if (Math.random() < .5) {
    testList.push(0 + 'qwertyuiopasdfghjklzxcvbnm@gmail.com');
  } else {
    testList.push(i + '@gmail.com');
  }
}

console.log(timeTest(removeDuplicates, 1, testList));
