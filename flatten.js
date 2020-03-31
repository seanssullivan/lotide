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

const flatten = function(nestedArrays) {
  let flattenedArray = [];
  for (let element of nestedArrays) {
    if (Array.isArray(element)) {
      element.forEach(elem => flattenedArray.push(elem));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([["hello", "world"], "lighthouse"]), ["hello", "world", "lighthouse"]);
