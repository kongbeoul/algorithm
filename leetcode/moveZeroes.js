/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    for(; index < nums.length; index++) {
        nums[index] = 0;
    }

    return nums;
};

console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]))