// countLetters.js

const countLetters = function(sentence) {
  const counts = {};

  for (let char of sentence) {
    char = char.toLowerCase();
    if (char !== ' ') {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
  }

  return counts;
};

module.exports = countLetters;
