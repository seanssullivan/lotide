// test/findKeyTest.js

const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  it("returns 'noma' for x => x.stars === 2", () => {
    assert.strictEqual(findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2), "noma");
  });

  it("returns 'Thor Odinson' for x => x.age > 125", () => {
    assert.strictEqual(findKey({
      "Tony Stark":       { age: 53 },
      "Peter Parker":     { age: 22 },
      "Steve Rogers":     { age: 105 },
      "Natasha Romanoff": { age: 39 },
      "Thor Odinson":     { age: 1500 },
      "Wanda Maximoff":   { age: 26 }
    }, x => x.age > 125), "Thor Odinson");
  });

});
