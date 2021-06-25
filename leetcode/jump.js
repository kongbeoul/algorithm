/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let count = 0, max_distance = 0, temp = 0;
    for(let i = 0; i < nums.length; i++) {
        const distance = i + nums[i];
        if(distance > max_distance) max_distance = distance;
        if(i === nums.length - 1) break;
        if(i === temp) {
            count++;
            temp = max_distance;
        }
    }
    return count;
};

console.log(jump([0]))