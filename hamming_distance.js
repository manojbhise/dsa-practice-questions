// Hamming Distance
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.
Input: (x = 1), (y = 4);
Input: (x = 1), (y = 4);
Output: 2;
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
Input: (v = 3), (w = 1);
Output: 1;

function hammingDistance(x, y) {
  // Convert num to binary
  x = x.toString(2);
  y = y.toString(2);
  if (x.length < y.length) while (x.length !== y.length) x = "0" + x;
  else if (x.length > y.length) while (x.length !== y.length) y = "0" + y;
  let distance = 0;
  for (let index = 0; index < x.length; index++) {
    if (x[index] !== y[index]) distance++;
  }
  return distance;
}

console.log("Hamming Distance", hammingDistance(x, y));
console.log("Hamming Distance", hammingDistance(v, w));
