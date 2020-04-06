// middle.js

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

module.exports = middle;
