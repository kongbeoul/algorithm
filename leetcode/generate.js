/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const answer = new Array(numRows).fill(0).map(v => []);
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                answer[i][j] = 1;
            } else {
                answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j]
            }
        }
    }
    return answer;
};

console.log(generate(5));