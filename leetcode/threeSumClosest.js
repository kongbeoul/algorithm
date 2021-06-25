/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let answer = null;
    
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i <= nums.length - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let num = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right) {
            let sum = num + nums[left] + nums[right];

            if(answer === null || Math.abs(answer - target) >= Math.abs(sum - target)) {
                answer = sum;
            }
            if(sum > target) {
                right--;
                while(left < right && nums[right] === nums[right + 1]) right--;
            } else {
                left++;
                while(left < right && nums[left] === nums[left - 1]) left++;
            }
        }
    }

    return answer;

};

console.log(threeSumClosest([0, 1, 2], 0));