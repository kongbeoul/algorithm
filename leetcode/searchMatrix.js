/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let index = -1;
    
    for(let i = 0; i < m; i++) {
        if(matrix[i][0] <= target) {
            index = i;
        }
    }

    if(index < 0) return false;

    for(let i = 0; i < n; i++) {
        if(matrix[index][i] === target) return true;
    }
    return false;
};

console.log(searchMatrix([[1], [3]], 3))