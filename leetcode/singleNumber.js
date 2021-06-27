/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) hash[nums[i]] = 0;
        hash[nums[i]]++;
    }
    
    for(let key in hash) {
        if(hash[key] === 1) return key;
    }
};
console.log(singleNumber([1]))