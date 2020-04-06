// findKeyByValue.js

const findKeyByValue = function(objectToSearch, value) {
  for (const key in objectToSearch) {
    if (objectToSearch[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
