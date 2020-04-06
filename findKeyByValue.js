// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

// ACTUAL FUNCTION
const findKeyByValue = function(objectToSearch, value) {
  for (const key in objectToSearch) {
    if (objectToSearch[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// TEST CODE
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const flightDepartureTimes = {
//   "8:00 a.m.": "Toronto",
//   "9:20 a.m.": "Tokyo",
//   "10:15 a.m.": "London",
//   "11:35 a.m.": "Ottawa",
//   "12:01 p.m.": "Pheonix",
//   "12:15 p.m.": "New York",
//   "12:47 p.m.": "Sydney",
//   "1:30 p.m.": "Vancouver",
//   "2:12 p.m.": "Toronto",
//   "2:34 p.m.": "Pheonix"
// }

// assertEqual(findKeyByValue(flightDepartureTimes, "Tokyo"), "9:20 a.m.");
// assertEqual(findKeyByValue(flightDepartureTimes, "Pheonix"), "12:01 p.m.");
