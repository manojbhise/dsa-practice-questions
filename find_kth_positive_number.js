// Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.
Input: (arr1 = [2, 3, 4, 7, 11]), (k = 5);
Output: 9;
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Input: (arr2 = [1, 2, 3, 4]), (t = 2);
Output: 6;
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

function findKthPositiveNumber(array, k) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] <= k + count) {
      // 1<=2+0 2<=5+0
      // 2<=2+1 3<=5+1
      // 3<=2+2 4<=5+2
      // 4<=2+3 7<=5+3
      //        11<=5+4 false
      count++;
    }
  }
  return k + count;
}

console.log("Kth positive number", findKthPositiveNumber(arr1, k));
console.log("Kth positive number", findKthPositiveNumber(arr2, t));
