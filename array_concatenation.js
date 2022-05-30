/**
 * Given an integer array nums of length n,
 * you want to create an array
 * ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i]
 * for 0 <= i < n (0-indexed).
 * @param {number[]} array
 * @returns {number[]}
 */

const concatenating = (array) => {
  return [...array, ...array];
};

console.log(concatenating([1, 2, 3]));
