const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
};

module.exports = findKey;

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   "Tony Stark":       { age: 53 },
//   "Peter Parker":     { age: 22 },
//   "Steve Rogers":     { age: 105 },
//   "Natasha Romanoff": { age: 39 },
//   "Thor Odinson":     { age: 1500 },
//   "Wanda Maximoff":   { age: 26 }
// }, x => x.age > 125), "Thor Odinson");

