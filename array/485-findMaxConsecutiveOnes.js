/**
 * @description 给定一个二进制数组， 计算其中最大连续1的个数。
 * @param {number[]} nums
 * @return {number}
 */

// 一次遍历
var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let currenyCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currenyCount++
      if (currenyCount > max) {
        max = currenyCount
      }
    } else {
      currenyCount = 0
    }
  }
  return max
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
