// PROBLEM: Find the longest word of a string

// INSTRUCTION:
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// SOLUTION:
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

	