/**
 * A palindrome is a word or sentence that's spelt the same way both forward and backward,
 * ignoring punctuation, case and spacing
 *
 */


function palindrome(str) {
    let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
    let reversedString = polishedString.split("").reverse().join("");
    return (polishedString === reversedString) ? true : false;
  }
  
  
  
  let result = palindrome("five|\_/|four");
  console.log(result);