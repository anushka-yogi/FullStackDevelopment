// sorted non decreasing means array have duplicates i.e a[i+1] >= a[i]
// change array in place means we dont have to create new array ; we have to modify existing array
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let length = nums.length;
  let k = 0;
  for (let i = 1; i < length; i++) {
    if (nums[i] !== nums[k]) {
      k = k + 1;
      nums[k] = nums[i];
    }
  }
  return k + 1;
};
let nums = [0,0,0,0,0,1,1,1,1,2,2,2,3,3,4];
console.log(removeDuplicates(nums));
