/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function binarySearch(start, end, target) {
        if(target > nums[end]) return end + 1;
        if(target < nums[start]) return start;
        
        const mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) return mid;
        
        if(nums[mid] > target) {
            return binarySearch(start, mid - 1, target);
        } else {
            return binarySearch(mid + 1, end, target);
        }
    }
    return binarySearch(0, nums.length - 1, target);
};

searchInsert([1, 3, 5, 6], 0);