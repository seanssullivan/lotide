// test/mapTest.js

const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom'] and word => word[0]", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  
  it("returns [1, 4, 9, 16, 25] for [1, 2, 3, 4, 5] and n => n ** 2", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], n => n ** 2), [1, 4, 9, 16, 25]);
  });

  it("returns [1, 2, 3, 4] for ['1', 'to', 'and', 'four'] and word => word.length", () => {
    assert.deepEqual(map(["1", "to", "and", "four"], word => word.length), [1, 2, 3, 4]);
  });

  it("returns ['one', 'two', 'three', 'four'] for [ { name: 'one' }, { name: 'two' }, { name: 'three' }, { name: 'four' } ] and obj => obj.name", () => {
    assert.deepEqual(map([{ name: "one"}, { name: "two" }, { name: "three" }], obj => obj.name), ["one", "two", "three"]);
  });

});
