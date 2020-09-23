// PROBLEM: Title case a sentence

// INSTRUCTION:
	// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
	// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// SOLUTON-1:
function titleCase(str) {
  let toArray = str.toLowerCase().split(' ');
  let result = toArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  })
  return result.join(' ');
}

titleCase("I'm a little tea pot");