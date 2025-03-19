// Find a palindrome number
// An integer is palindrom if it is says as forward and backward
let x = 121; // Output: true
let y = 10; // Output: false
let z = 12321; // Output: true

function isPalindrome(str) {
  if (str.length < 2) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}
function palindrome(num) {
  return isPalindrome(num.toString());
}

console.log("Is number a Palindrome:", palindrome(x));
console.log("Is number a Palindrome:", palindrome(y));
console.log("Is number a Palindrome:", palindrome(z));
