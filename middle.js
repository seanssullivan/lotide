// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(fullArray) {
  const length = fullArray.length;
  
  if (length % 2 !== 0 && length > 2) {
    const middleIndex = Math.floor(length / 2);
    return fullArray.slice(middleIndex, middleIndex + 1);
  } else if (length % 2 === 0 && length > 2) {
    const middleIndex = Math.floor(length / 2) - 1;
    return fullArray.slice(middleIndex, middleIndex + 2);
  } else {
    return [];
  }
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);