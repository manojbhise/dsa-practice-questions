// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: (s = "anagram"), (t = "nagaram");
Output: true;
Input: (v = "rat"), (w = "car");
Output: false;

function isValidAnagram(s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
}

function isValidAnagramNew(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (let index = 0; index < s.length; index++) {
    obj1[s[index]] = !obj1[s[index]] ? 1 : obj1[s[index]] + 1;
    obj2[t[index]] = !obj2[t[index]] ? 1 : obj2[t[index]] + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log("isValidAnagram", isValidAnagram(s, t));
console.log("isValidAnagram", isValidAnagram(v, w));

console.log("isValidAnagram", isValidAnagramNew(s, t));
console.log("isValidAnagram", isValidAnagramNew(v, w));
