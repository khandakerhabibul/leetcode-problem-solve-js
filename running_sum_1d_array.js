/**
 * Given an array nums. We define a running
 * sum of an array as runningSum[i] = sum(nums[0]…nums[i])
 * Return the running sum of nums.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let arr = [];

  nums.forEach((num, id) => {
    if (id === 0) {
      arr.push(num);
    } else {
      let p = 0;
      arr.forEach((num, id) => {
        p = nums[id] + p;
      });
      arr.push(num + p);
    }
  });
  return arr;
};

console.log(runningSum([1, 2, 3, 4]));
