/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = -Infinity;
    let prevSum = 0;
    for(let i = 0; i < nums.length; i++) {
        prevSum = Math.max(nums[i], nums[i] + prevSum);
        if(prevSum > sum) sum = prevSum;
    }
    return sum;
};

console.log(maxSubArray([5,4,-1,7,8]))