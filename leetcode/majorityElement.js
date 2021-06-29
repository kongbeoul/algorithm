/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const mid = Math.round(nums.length / 2);
    const hash = {};

    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) hash[nums[i]] = 0;
        hash[nums[i]]++;
    }
    
    for(let k in hash) {
        if(hash[k] >= mid) return k;
    }

};

console.log(majorityElement([2,2,1,1,1,2,2]));