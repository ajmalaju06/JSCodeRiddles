/** =========================================== **/
/**  Prime Numbers */
/** =========================================== **/

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function PrimeNumbers(number) {
  for (let i = 0; i < number; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

module.exports = { PrimeNumbers, isPrime };
