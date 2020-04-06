// test/findKeyByValueTest.js

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  it("returns 'drama' for 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns 'undefined' for 'That '70s Show'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns '9:20 a.m.' for 'Tokyo'", () => {
    const flightDepartureTimes = {
      "8:00 a.m.": "Toronto",
      "9:20 a.m.": "Tokyo",
      "10:15 a.m.": "London",
      "11:35 a.m.": "Ottawa",
      "12:01 p.m.": "Pheonix",
      "12:15 p.m.": "New York",
      "12:47 p.m.": "Sydney",
      "1:30 p.m.": "Vancouver",
      "2:12 p.m.": "Toronto",
      "2:34 p.m.": "Pheonix"
    };

    assert.strictEqual(findKeyByValue(flightDepartureTimes, "Tokyo"), "9:20 a.m.");
  });

  it("returns '12:01 p.m.' for 'Pheonix'", () => {
    const flightDepartureTimes = {
      "8:00 a.m.": "Toronto",
      "9:20 a.m.": "Tokyo",
      "10:15 a.m.": "London",
      "11:35 a.m.": "Ottawa",
      "12:01 p.m.": "Pheonix",
      "12:15 p.m.": "New York",
      "12:47 p.m.": "Sydney",
      "1:30 p.m.": "Vancouver",
      "2:12 p.m.": "Toronto",
      "2:34 p.m.": "Pheonix"
    };

    assert.strictEqual(findKeyByValue(flightDepartureTimes, "Pheonix"), "12:01 p.m.");
  });

});
