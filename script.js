function firstNonRepeatedChar(inputString) {
  if (inputString.length === 0) {
    return null;
  }

  // Count occurrences of each character
  const charCount = {};
  for (let char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (let char of inputString) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If all characters are repeated
  return null;
}

// Example usage:
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null