// Rotate Array
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotateArray = (nums, k) => {
  const len = nums.length;

  if (k > len) {
    k = k % len;
  }

  const array = nums.splice(len - k, len);
  nums.unshift(...array);

  return nums;
};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const nums2 = [-1, -100, 3, 99];
const j = 2;
const nums3 = [1, 2, 3, 4, 5, 6, 7];
const nums4 = [-1, -100, 3, 99];

console.log("Rotated array:", rotateArray(nums1, k));
console.log("Rotated array:", rotateArray(nums2, j));

const reverseArray = (nums, left, right) => {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
};

// Time complexity O(n)
// Space complexity O(1)
const rotateArrayOptimised = (nums, k) => {
  const len = nums.length;

  if (k > len) {
    k = k % len;
  }

  reverseArray(nums, 0, len - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, len - 1);

  return nums;
};

console.log("Rotated array Optimised:", rotateArrayOptimised(nums3, k));
console.log("Rotated array Optimised:", rotateArrayOptimised(nums4, j));
