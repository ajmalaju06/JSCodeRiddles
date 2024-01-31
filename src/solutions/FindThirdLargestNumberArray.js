/** =========================================== **/
/**  Find Third Largest Number */
/** =========================================== **/

function ThirdLargestNumber(arr) {
  const parsedArr = JSON.parse(arr);
  if (parsedArr.length >= 3) {
    const sortedArr = parsedArr.sort((a, b) => b - a);
    console.log(sortedArr[2]);
  } else {
    console.log("Please enter above 3 elements in array");
  }
}

module.exports = ThirdLargestNumber;
