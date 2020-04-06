// test/withoutTest.js

const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  it("returns a new array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it("returns [2, 3] for [1, 2, 3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for ['1', '2', '3'] and [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns ['lighthouse', 'labs', 'rules] for ['javascript', 'with', 'lighthouse', 'labs', 'rules'] and ['javascript', 'with']", () => {
    assert.deepEqual(without(["javascript", "with", "lighthouse", "labs", "rules"], ["javascript", "with"]), ["lighthouse", "labs", "rules"]);
  });

  it("returns ['one', 'two', 'three', 'four'] for ['one', 'two', undefined, 'three', undefined, 'four'] and [undefined]", () => {
    assert.deepEqual(without(["one", "two", undefined, "three", undefined, "four"], [undefined]), ["one", "two", "three", "four"]);
  });
  
});
