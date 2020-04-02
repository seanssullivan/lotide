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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
