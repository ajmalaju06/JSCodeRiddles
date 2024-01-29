/** =========================================== **/
/** Reverse the words in sequence */
/** =========================================== **/
function reverseSentence(inputValue) {
  let splitValue = inputValue.split(" ");
  let result = "";
  let firstValue = "";
  let lastValue = "";

  for (let i = 0; i <= splitValue.length; i++) {
    firstValue = splitValue[0].split("").reverse().join("");
    lastValue = splitValue[splitValue.length - 1];

    // result += lastValue + " " + firstValue + " ";
    result += lastValue.concat(" ", firstValue + " ");

    splitValue.shift();
    splitValue.pop();

    if (splitValue.length === 1) {
      result += splitValue[0];
    }
  }

  return result;
}

module.exports = reverseSentence;
