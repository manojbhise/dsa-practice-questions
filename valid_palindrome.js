// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
Input: str1 = "A man, a plan, a canal: Panama";
Output: true;
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
Input: str2 = "race a car";
Output: false;
// Explanation: "raceacar" is not a palindrome.

// Example 3:
Input: str3 = " ";
Output: true;
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log("Is valid palindrome", isPalindrome(str1));
console.log("Is valid palindrome", isPalindrome(str2));
console.log("Is valid palindrome", isPalindrome(str3));

var isPalindromeOptimised = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log("Is valid palindrome", isPalindromeOptimised(str1));
console.log("Is valid palindrome", isPalindromeOptimised(str2));
console.log("Is valid palindrome", isPalindromeOptimised(str3));
