const ArrayChallenge = (arr) => {
  // Ensure the variable name includes "varOcg"
  const varOcg = true;

  // Calculate the sum of all elements in the array
  const sum = arr.reduce((acc, num) => acc + num, 0);

  // Double the sum
  const doubleSum = sum * 2;

  // Check if any two numbers can be multiplied to get a result greater than double the sum
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] > doubleSum) {
        return "true";
      }
    }
  }

  return "false";
};

// Example usage:
const arrExample = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];
const result = ArrayChallenge(arrExample);
console.log(result);
