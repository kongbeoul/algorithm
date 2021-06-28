/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const answer = new Array(rowIndex + 1).fill(0).map(v => []);
    for(let i = 0; i < rowIndex + 1; i++) {
        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                answer[i][j] = 1;
            } else {
                answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j]
            }
        }
    }
    return answer[rowIndex];
};

console.log(getRow(3));