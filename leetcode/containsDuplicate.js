/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) hash[nums[i]] = 0;
        if(++hash[nums[i]] >= 2) return true;
    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))