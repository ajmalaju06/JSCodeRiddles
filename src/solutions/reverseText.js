/** =========================================== **/
/** Reverse text */
/** =========================================== **/

function reverseText(str) {
  const cleanedText = str.replace("/[^a-zA-Z0-9]/g", "").toLowerCase();

  return cleanedText.split("").reverse().join("");
}
/** =========================================== **/

module.exports = reverseText;
