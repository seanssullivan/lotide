const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let itemsRetained = [];
  for (let element of source) {
    if (itemsToRemove.indexOf(element) === -1) {
      itemsRetained.push(element);
    }
  }
  return itemsRetained;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["javascript", "with", "lighthouse", "labs", "rules"], ["javascript", "with"]), ["lighthouse", "labs", "rules"]);
assertArraysEqual(without(["one", "two", undefined, "three", undefined, "four"], [undefined]), ["one", "two", "three", "four"]);
