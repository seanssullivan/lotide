const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const counts = {};

  for (let char of sentence) {
    char = char.toLowerCase();
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }

  return counts;
};

const sentenceToCount = "Lighthouse in the house";

const result = countLetters(sentenceToCount);
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);