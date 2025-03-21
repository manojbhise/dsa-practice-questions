// Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).

let nums1 = [4, 5, 6, 7, 0, 1, 2];
let target1 = 0;
Output: 4;
let nums2 = [4, 5, 6, 7, 0, 1, 2];
let target2 = 3;
Output: -1;
let nums3 = [1];
let target3 = 0;
Output: -1;

// O(n) Runtime complexity
// O(1) Space complexity
function linearSearch(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    if (target === nums[index]) return index;
  }
  return -1;
}

console.log("Linear search:", linearSearch(nums1, target1));
console.log("Linear search:", linearSearch(nums2, target2));
console.log("Linear search:", linearSearch(nums3, target3));
