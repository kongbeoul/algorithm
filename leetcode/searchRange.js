/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1];

    function bisectLeft(array, start, end, target) {
        while(start <= end) {
            const mid = Math.floor((start + (end - start)) / 2);
            if(target <= array[mid]) end = mid - 1;
            else start = mid + 1;
        }

        return start;
    }

    function bisectRight(array, start, end, target) {
        while(start <= end) {
            const mid = Math.floor((start + (end - start)) / 2);
            if(target < array[mid]) end = mid - 1;
            else start = mid + 1;
        }
        return start;
    }

    const start = bisectLeft(nums, 0, nums.length - 1, target);
    const end = bisectRight(nums, start, nums.length - 1, target) - 1;

    return [ start, end ]
};

console.log(searchRange([0, 0, 0, 1, 2, 3], 0))