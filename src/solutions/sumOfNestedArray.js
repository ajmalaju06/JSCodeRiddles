/** =========================================== **/
/** Sum of nested arrays; */
/** =========================================== **/
function sumOfNestedArrays(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result += sumOfNestedArrays(arr[i]);
    } else {
      result += arr[i];
    }
  }

  return result;
}

module.exports = sumOfNestedArrays;
