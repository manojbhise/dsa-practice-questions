//  Reverse a string
// Input: "hello" Output: "olleh"
let input1 = "hello";
let input2 = "welcome";

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(`Reversed string for '${input1}' is '${reverseString(input1)}'.`);
console.log(`Reversed string for '${input2}' is '${reverseString(input2)}'.`);
// Reversed string for 'hello' is 'olleh'.
// Reversed string for 'welcome' is 'emoclew'.
