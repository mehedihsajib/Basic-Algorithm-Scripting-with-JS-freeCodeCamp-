// PROBLEM: Convert Celsius to Fahrenheit

// INSTRUCTION:
	// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.


// SOLUTION:
function convertToF(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;

  return fahrenheit;
}
convertToF(30);