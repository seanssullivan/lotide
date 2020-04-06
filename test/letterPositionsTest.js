// test/letterPositionsTest.js

const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns an object", () => {
    const actual = letterPositions("hello");
    assert.isObject(actual);
  });

  it("returns correct position for letters", () => {
    const actual = letterPositions("hello");
    assert.deepEqual(actual['h'], [0]);
    assert.deepEqual(actual['e'], [1]);
    assert.deepEqual(actual['l'], [2, 3]);
    assert.deepEqual(actual['o'], [4]);
  });

});
