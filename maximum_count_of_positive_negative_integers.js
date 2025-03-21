// Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
Input: nums1 = [-2, -1, -1, 1, 2, 3];
Output: 3;
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Input: nums2 = [-3, -2, -1, 0, 0, 1, 2];
Output: 3;
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

function maxCount(nums) {
  let nCt = 0;
  let pCt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) pCt++;
    else if (nums[i] < 0) nCt++;
  }
  return pCt > nCt ? pCt : nCt;
}

console.log("Max count is", maxCount(nums1));
console.log("Max count is", maxCount(nums2));
