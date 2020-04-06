// eqArrays.js

const eqArrays = function(firstArray, secondArray) {
  // Let's start by making sure they are the same length.
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  // If any element does not match its counterpart, return false.
  for (let i = 0; i < firstArray.length; i++) {
    if (
      Array.isArray(firstArray[i]) && 
      Array.isArray(secondArray[i])
    ) {
      if (!eqArrays(firstArray[i], secondArray[i])) return false;
    } else if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  // If all are the same, return true.
  return true;
};

module.exports = eqArrays;
