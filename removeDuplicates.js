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
  console.log(list, results)
  return results;
}

function timeTest (func, testCount) {
  var start;
  var args = [];
  var result;
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[args.length] = arguments[i];
    }

    start = new Date();
    result = func.apply(null, args);
  } else {
    start = new Date();
    result = func.call(null);
  }
  return {result: result, time: new Date() - start};
}

function generateList(length) {
  var testList = [];
  for (var i = 0; i < length; i++) {
    if (Math.random() < .5) {
      testList[testList.length] = i%100 + 'fwefwqefweqwf@gmail.com';
    } else {
      testList[testList.length] = i + 'fwefwqefweqwf@gmail.com';
    }
  }
  return testList;
}
