// Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
// such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the
// unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Time complexity O(n)
// Space complexity O(1)
const removeDuplicates = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      array.splice(index + 1, 1);
      index--;
    }
  }
  return array.length;
};

const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const nums3 = [1, 1, 2];
const nums4 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log("After removing duplicates length is", removeDuplicates(nums1));
console.log("After removing duplicates length is", removeDuplicates(nums2));

const removeDuplicatesNew = (array) => {
  if (!array.length) return 0;
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};

console.log("After removing duplicates length is", removeDuplicatesNew(nums3));
console.log("After removing duplicates length is", removeDuplicatesNew(nums4));
