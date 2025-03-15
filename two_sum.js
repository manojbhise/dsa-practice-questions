// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Input: nums = [3,3], target = 6
// Output: [0,1]

const nums = [2,7,11,15];
const target = 9;

var twoSum = function(nums, target) {
  const len = nums.length;
  const result = [];
  for(let i=0; i<len; i++) {
      for(let j=i+1; j<len; j++) {
          if(nums[i] + nums[j] == target) {
              result.push(i)
              result.push(j)
          }
      }
  }
  return result
};

const final = twoSum(nums, target);
console.log(final)