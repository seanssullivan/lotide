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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map([1, 2, 3, 4, 5], n => n ** 2), [1, 4, 9, 16, 25]);
assertArraysEqual(map(["1", "to", "and", "four"], word => word.length), [1, 2, 3, 4]);
assertArraysEqual(map([{ name: "one"}, { name: "two" }, { name: "three" }], obj => obj.name), ["one", "two", "three"]);
