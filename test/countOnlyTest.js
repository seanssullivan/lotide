// countOnlyTest.js

const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  it("returns { Fang: 2, Jason: 1, Karima: undefined } for firstNames", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const actual = countOnly(firstNames, { "Jason": true, "Karima":true, "Fang": true });
    assert.strictEqual(actual["Jason"], 1);
    assert.strictEqual(actual["Karima"], undefined);
    assert.strictEqual(actual["Fang"], 2);
  });

});
