/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = null;
    const answer = [];

    for(let i = 0; i < nums.length; i++) {
        if(start === null) {
            start = nums[i];
        }
        if(nums[i + 1] - nums[i] !== 1) {
            start === nums[i] ? answer.push(`${start}`) : answer.push(`${start}->${nums[i]}`);
            start = null;
        }
    }
    
    return answer;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))