// flatten.js

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

module.exports = flatten;
