/**
 * @description 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 * @param {number[]} nums
 * @return {number}
 */
// 1.维护一个length为3的数组
var thirdMax01 = function (nums) {
  let tmpArr = [-Infinity, -Infinity, -Infinity]
  for (let i = 0; i < nums.length; i++) {
    if (tmpArr.includes(nums[i])) {
      continue
    }
    if (nums[i] > tmpArr[2]) {
      tmpArr = [tmpArr[1], tmpArr[2], nums[i]]
      tmpArr.push(nums[i])
    } else if (nums[i] > tmpArr[1]) {
      tmpArr[0] = tmpArr[1]
      tmpArr[1] = nums[i]
    } else if (nums[i] > tmpArr[0]) {
      tmpArr[0] = nums[i]
    }
  }
  return tmpArr[0] === -Infinity ? tmpArr[2] : tmpArr[0]
};

// 2. 思路和方法1一样, 不使用数组的includes提高性能
var thirdMax = function (nums) {
  let n1 = -Infinity, n2 = -Infinity, n3 = -Infinity
  for (const n of nums) {
    if (n1 === n || n2 === n || n3 === n) continue
    if (n > n3) {
      n1 = n2
      n2 = n3
      n3 = n
      continue
    }

    if (n > n2) {
      n1 = n2
      n2 = n
      continue
    }

    if (n > n1) {
      n1 = n
    }
  }
  return n1 === -Infinity ? n3 : n1
};

console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 1, 2, 3]))
console.log(thirdMax([1, 2, -2147483648]))