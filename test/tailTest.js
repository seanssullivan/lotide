// test/tailTest.js

const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

assertEqual(tail([1])[0], undefined);
assertEqual(tail([])[0], undefined);
