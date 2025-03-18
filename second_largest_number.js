// Second Largest
// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Input: arr[] = [10, 5, 10]
// Output: 5

// This function has Time complexity: O(n logn) as it takes more time than O(n)
const secondLargest = (arr) => {
  if (!arr.length) return -1;
  // Here uniques array will be created and set is converted to array
  const uniqueArr = [...new Set(arr)]; // Time complexity: O(n)
  // Can also use Array.from to convert into array
  // const uniqueArr2 = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => b - a); // Time complexity: O(n logn)
  const len = uniqueArr.length;
  return len > 1 ? uniqueArr[1] : -1;
};

const input1 = [12, 35, 1, 10, 34, 1];
const input2 = [10, 5, 10];

console.log("Second largest:", secondLargest(input1));
console.log("Second largest:", secondLargest(input2));

// Time complexity: O(n)
// Space complexity: O(1)
const secondLargestOptimised = (arr) => {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log("Second largest optimised:", secondLargestOptimised(input1));
console.log("Second largest optimised:", secondLargestOptimised(input2));
