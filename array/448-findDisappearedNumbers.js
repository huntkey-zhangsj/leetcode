/**
 * @description 
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 * @param {number[]} nums
 * @return {number[]}
 */

// 1. 使用哈希表
var findDisappearedNumbers = function (nums) {
  const set = new Set(nums)
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) {
      result.push(i + 1)
    }
  }
  return result
};

// 2. 原地修改
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const newIndex = Math.abs(nums[i]) - 1;
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
// console.log(findDisappearedNumbers([2, 2, 2, 2, 2, 2, 2, 2]))
