// countOnly.js

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    results[item] = results[item] && itemsToCount[item] ? results[item] + 1 : 1;
  }

  return results;
};

module.exports = countOnly;
