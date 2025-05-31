// Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
Input: (s1 = "PAYPALISHIRING"), (numRows1 = 3);
// Output: "PAHNAPLSIIGYIR"
// Example 2:
Input: (s2 = "PAYPALISHIRING"), (numRows2 = 4);
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:
Input: (s3 = "A"), (numRows3 = 1);
// Output: "A"

const zigZagConversion = (str, numRows) => {
  if (numRows === 1) return str;

  let k = 0;
  let toggle = true;
  const arr = new Array(numRows).fill("");

  for (let i = 0; i < str.length; i++) {
    arr[k] = arr[k] + str[i];
    if (toggle && k === arr.length - 1) toggle = !toggle;
    else if (!toggle && k === 0) toggle = !toggle;
    toggle ? k++ : k--;
  }

  return arr.join("");
};

console.log(zigZagConversion(s1, numRows1)); // Output: PAHNAPLSIIGYIR
console.log(zigZagConversion(s2, numRows2)); // Output: PINALSIGYAHRPI
console.log(zigZagConversion(s3, numRows3)); // Output: A
