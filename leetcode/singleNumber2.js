/**
 * 
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer = 0;
    
    for(let i = 0; i < 32; i++) {
        let mask = 1 << i;
        let bitSum = 0;
        for(let i = 0; i < nums.length; i++) {
            if(mask & nums[i]) bitSum++;
        }
        if(bitSum % 3 !== 0) answer |= mask;
    }
    return answer;
};

console.log(singleNumber([-2,-2,1,1,4,1,4,4,-4,-2]))