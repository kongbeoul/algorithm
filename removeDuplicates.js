/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 1) return 0;

    let count = 1,
        left = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[left]) {
            left++;
            nums[left] = nums[i];
            count += 1;
        }
    }

    return count;
}

removeDuplicates([1, 1, 2]);