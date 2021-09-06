/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = [];
    const buffer = [];
    const len = candidates.length;
    const search = (index, result) => {
        if(result > target || index === len) return;
        if(result === target) {
            answer.push(buffer.slice());
            return;
        }

        buffer.push(candidates[index]);
        search(index, result + candidates[index]);
        buffer.pop();
        search(index + 1, result);
    }

    search(0, 0);
    return answer;
};

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))
console.log(combinationSum([2], 1))
console.log(combinationSum([1], 1))
console.log(combinationSum([1, 1], 2))
console.log(combinationSum([3, 5, 8], 11))