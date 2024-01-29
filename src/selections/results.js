const { exampleResultSelections } = require("../data/datas");
const {
  FibonacciSeries1,
  FibonacciSeries2,
} = require("../solutions/fibonacci-series");
const { isPalindrome, isPalindrome2 } = require("../solutions/isPalindrome");
const reverseText = require("../solutions/reverseText");
const reverseSentence = require("../solutions/reverseThewords");
const sumOfNestedArrays = require("../solutions/sumOfNestedArray");
const getInput = require("../utilities/getInput");

function results(answers) {
  switch (answers.choice) {
    case exampleResultSelections[0].name:
      getInput("Type nested Array").then((value) => {
        const sum = sumOfNestedArrays(JSON.parse(value));
        console.log(sum);
      });
      break;
    case exampleResultSelections[1].name:
      getInput("Type any number").then((value) => {
        const result = FibonacciSeries1(+value);
        console.log(result);
      });

      break;
    case exampleResultSelections[2].name:
      getInput("Type any number").then((value) => {
        const result = FibonacciSeries2(+value);
        console.log(result);
      });
      break;
    case exampleResultSelections[3].name:
      getInput("Type word to check palindrome").then((value) => {
        const result = isPalindrome(value);
        console.log(result);
      });
      break;
    case exampleResultSelections[4].name:
      getInput("Type word to check palindrome").then((value) => {
        const result = isPalindrome2(value);
        console.log(result);
      });
      break;
    case exampleResultSelections[5].name:
      getInput("Type word to reverse text").then((value) => {
        const result = reverseText(value);
        console.log(result);
      });
      break;
    case exampleResultSelections[6].name:
      getInput("Type sentence to reverse").then((value) => {
        const result = reverseSentence(value);
        console.log(result);
      });
      break;

    default:
      break;
  }
}

module.exports = results;
