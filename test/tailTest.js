// test/tailTest.js

const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {

  it("returns a new array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.lengthOf(words, 3);
  });

  it("returns an empty array for [1]", () => {
    const output = tail([1]);
    assert.isArray(output);
    assert.isEmpty(output);
  });

  it("returns an empty array for []", () => {
    const output = tail([]);
    assert.isArray(output);
    assert.isEmpty(output);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.sameOrderedMembers(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

});
