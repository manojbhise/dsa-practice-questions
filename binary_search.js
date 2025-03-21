// Binary Search
// Given an array of integers 1 which is sorted in ascending order, and an integer target, write a function to search target in 1.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

Input: (nums1 = [-1, 0, 3, 5, 9, 12]), (target1 = 9);
Output: 4;
Input: (nums2 = [-1, 0, 3, 5, 9, 12]), (target2 = 2);
Output: -1;

// O(log n) Runtime complexity
// O(1) Space complexity
function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) start = middle + 1;
    else end = middle - 1;
  }
  return -1;
}

console.log("Binary search:", binarySearch(nums1, target1));
console.log("Binary search:", binarySearch(nums2, target2));
