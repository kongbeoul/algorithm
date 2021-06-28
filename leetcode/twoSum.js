/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const hash = {};
    const answer = [];
    for(let i = 0; i < numbers.length; i++) {
        if(hash[numbers[i]] !== undefined) {
            answer.push(hash[numbers[i]], i + 1);
        }
        hash[target - numbers[i]] = i + 1;
    }
    return answer.sort((a, b) => a - b);
};

console.log(twoSum([-1, 0], -1))