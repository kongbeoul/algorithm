/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let i = Number.MAX_VALUE;
    let j = Number.MAX_VALUE;

    for(let x = 0; x < nums.length; x++) {
        let k = nums[x];

        if(i >= k) i = k;
        else if(j >= k) j = k;
        else return true;
    }


    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]))
console.log(increasingTriplet([4,5,2147483647,1,2]))