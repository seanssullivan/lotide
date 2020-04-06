// letterPositions.js

const letterPositions = function(sentence) {
  const results = {};
  
  for (const index in sentence) {
    const char = sentence[index].toLowerCase();
    const position = Number(index);
    if (Array.isArray(results[char])) {
      results[char].push(position);
    } else {
      results[char] = [position];
    }
  }

  return results;
};

module.exports = letterPositions;
