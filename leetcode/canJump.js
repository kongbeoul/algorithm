/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max_distance = 0;
    for(let i = 0; i < nums.length; i++) {
        if(i === max_distance) {
            if(max_distance === nums.length - 1) return true;
            if(nums.length - max_distance <= nums[i]) return true;
            if(nums[i] <= 0) return false;
        }
        const distance = Math.min(i + nums[i], nums.length - 1);
        if(distance > max_distance) {
            max_distance = distance;
        };
    }
    return false;
};

console.log(canJump([2, 5, 0, 0]))