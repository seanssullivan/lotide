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
const letterPositions = function(sentence) {
  const results = {};
  
  for (const index in sentence) {
    const char = sentence[index].toLowerCase();
    const position = Number(index);
    if (Array.isArray(results[char])) {
      results[char].push(position);
    } else {
      results[char] = [position];
    }
  }

  return results;
};

// TEST CODE
const result = letterPositions("hello");
console.log(result);
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);