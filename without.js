// without.js

const without = function(source, itemsToRemove) {
  let itemsRetained = [];
  for (let element of source) {
    if (itemsToRemove.indexOf(element) === -1) {
      itemsRetained.push(element);
    }
  }
  return itemsRetained;
};

module.exports = without;
