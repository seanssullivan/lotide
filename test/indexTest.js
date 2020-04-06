// test/indexTest.js

const assert = require('chai').assert;
const _ = require('../index');

describe("#index", () => {

  it("returns object which includes countLetters()", () => {
    assert.property(_, 'countLetters');
  });

  it("returns object which includes countOnly()", () => {
    assert.property(_, 'countOnly');
  });

  it("returns object which includes findKey()", () => {
    assert.property(_, 'findKey');
  });

  it("returns object which includes findKeyByValue()", () => {
    assert.property(_, 'findKeyByValue');
  });

  it("returns object which includes flatten()", () => {
    assert.property(_, 'flatten');
  });

  it("returns object which includes head()", () => {
    assert.property(_, 'head');
  });

  it("returns object which includes letterPositions()", () => {
    assert.property(_, 'letterPositions');
  });

  it("returns object which includes map()", () => {
    assert.property(_, 'map');
  });

  it("returns object which includes middle()", () => {
    assert.property(_, 'middle');
  });

  it("returns object which includes tail()", () => {
    assert.property(_, 'tail');
  });

  it("returns object which includes takeUntil()", () => {
    assert.property(_, 'takeUntil');
  });

  it("returns object which includes without()", () => {
    assert.property(_, 'without');
  });

});
