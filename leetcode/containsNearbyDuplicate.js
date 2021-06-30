/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) {
//     const len = nums.length;
//     for(let i = 0; i < len; i++) {
//         for(let j = i + 1; j < len; j++) {
//             if(nums[i] === nums[j] && j - i <= k) return true;
//         }
//     }
//     return false;
// };

var containsNearbyDuplicate = function(nums, k) {
    const len = nums.length;
    const hash = {};
    for(let i = 0; i < len; i++) {
        if(hash[nums[i]] >= 0 && i - hash[nums[i]] <= k) return true;
        hash[nums[i]] = i;
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));