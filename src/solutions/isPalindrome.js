/** =========================================== **/
/** Check isPalindrome */
/** =========================================== **/

function isPalindrome(str) {
  let reverseString = str.split("").reverse().join("");

  if (str == reverseString) {
    return "Its a Palindrome";
  } else {
    return "Its not Palindrome";
  }
}

/** =========================================== **/
/** Check isPalindrome */
/** =========================================== **/

function isPalindrome2(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    return "Its a Palindrome";
  } else {
    return "Its not Palindrome";
  }
}

module.exports = { isPalindrome, isPalindrome2 };
