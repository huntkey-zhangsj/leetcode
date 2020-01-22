/**
 * @description 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 1. 交换不等于0的数据
var moveZeroes01 = function (nums) {
  let currenyIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[currenyIndex]
      nums[currenyIndex] = nums[i]
      nums[i] = temp
      currenyIndex++
    }
  }
  return nums
};

// 2. 将不等于0的数据往前提,并赋值最后几位数字为0
var moveZeroes02 = function (nums) {
  let currenyIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[currenyIndex] = nums[i]
      currenyIndex++
    }
  }
  for (; currenyIndex < nums.length; currenyIndex++) {
    nums[currenyIndex] = 0;
  }
  return nums
};

console.log(moveZeroes01([0, 1, 0, 3, 12]))
console.log(moveZeroes01([2, 1]))
console.log(moveZeroes02([0, 1, 0, 3, 12]))
console.log(moveZeroes02([2, 1]))