const { exampleResultSelections } = require("../data/datas");
const ThirdLargestNumber = require("../solutions/FindThirdLargestNumberArray");
const {
  FibonacciSeries1,
  FibonacciSeries2,
} = require("../solutions/fibonacciSeries");
const { isPalindrome, isPalindrome2 } = require("../solutions/isPalindrome");
const { PrimeNumbers, isPrime } = require("../solutions/primeNumbers");
const reverseText = require("../solutions/reverseText");
const reverseSentence = require("../solutions/reverseThewords");
const sumOfNestedArrays = require("../solutions/sumOfNestedArray");
const getInput = require("../utilities/getInput");

function codes(answers) {
  switch (answers.choice) {
    case exampleResultSelections[0].name:
      getInput("Type nested Array").then((value) => {
        const sum = sumOfNestedArrays(JSON.parse(value));
        console.log("======================================");
        console.log(sumOfNestedArrays.toString());
        console.log("======================================");
        console.log(sum);
      });
      break;
    case exampleResultSelections[1].name:
      getInput("Type any number").then((value) => {
        const result = FibonacciSeries1(+value);
        console.log("======================================");
        console.log(FibonacciSeries1.toString());
        console.log("======================================");
        console.log(result);
      });

      break;
    case exampleResultSelections[2].name:
      getInput("Type any number").then((value) => {
        const result = FibonacciSeries2(+value);
        console.log("======================================");
        console.log(FibonacciSeries2.toString());
        console.log("======================================");
        console.log(result);
      });
      break;
    case exampleResultSelections[3].name:
      getInput("Type word to check palindrome").then((value) => {
        const result = isPalindrome(value);
        console.log("======================================");
        console.log(isPalindrome.toString());
        console.log("======================================");
        console.log(result);
      });
      break;
    case exampleResultSelections[4].name:
      getInput("Type word to check palindrome").then((value) => {
        const result = isPalindrome2(value);
        console.log("======================================");
        console.log(isPalindrome2.toString());
        console.log("======================================");
        console.log(result);
      });
      break;
    case exampleResultSelections[5].name:
      getInput("Type word to reverse text").then((value) => {
        const result = reverseText(value);
        console.log("======================================");
        console.log(reverseText.toString());
        console.log("======================================");
        console.log(result);
      });
      break;
    case exampleResultSelections[6].name:
      getInput("Type sentence to reverse").then((value) => {
        const result = reverseSentence(value);
        console.log("======================================");
        console.log(reverseSentence.toString());
        console.log("======================================");
        console.log(result);
      });
      break;
    case exampleResultSelections[7].name:
      getInput("Enter any number").then((value) => {
        const result = PrimeNumbers(value);
        console.log("======================================");
        console.log(isPrime.toString());
        console.log(PrimeNumbers.toString());
        console.log("======================================");
        if (result) console.log(result);
      });
      break;

    case exampleResultSelections[8].name:
      getInput("Type any array").then((value) => {
        const result = ThirdLargestNumber(value);
        console.log("======================================");
        console.log(ThirdLargestNumber.toString());
        console.log("======================================");
        if (result) console.log(result);
      });
      break;

    default:
      break;
  }
}

module.exports = codes;
