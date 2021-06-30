/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const { length } = nums; 
    let firstIndex = 0; 
    let lastIndex = length - 1; 
    while (firstIndex <= lastIndex) { 
        const midIndex = Math.floor((firstIndex + lastIndex) / 2); 
        if (nums[midIndex] === target) { 
            firstIndex = midIndex; 
            lastIndex = midIndex; 
            break; 
        } 
        if (nums[midIndex] < target) {
            firstIndex = midIndex + 1; 
        } else { 
            lastIndex = midIndex - 1; 
        } 
    } 
    if (firstIndex > lastIndex) { return [-1, -1]; } 

    while (nums[firstIndex - 1] === target) firstIndex--; 
    while (nums[lastIndex + 1] === target) lastIndex++; 
    return [firstIndex, lastIndex];
};

console.log(searchRange([1], 1))