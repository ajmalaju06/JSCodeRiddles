/** =========================================== **/
/**  Fibonacci Series1 */
/** =========================================== **/

function FibonacciSeries1(number) {
  let fistTerm = 0;
  let secondTerm = 1;
  let nextTerm = 0;
  let result = [];

  for (let i = 1; i < number; i++) {
    result.push(fistTerm);
    // console.log(fistTerm); // we can use if we don't want array to print
    nextTerm = fistTerm + secondTerm;
    fistTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return result;
}

/** =========================================== **/
/**  Fibonacci Series2 */
/** =========================================== **/
function FibonacciSeries2(number) {
  if (number <= 0) {
    return [0];
  } else if (number === 1) {
    return [0, 1];
  } else if (number === 2) {
    return [1, 1];
  } else {
    let fib = [0, 1];
    for (let i = 2; i < number; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
}

module.exports = { FibonacciSeries1, FibonacciSeries2 };
