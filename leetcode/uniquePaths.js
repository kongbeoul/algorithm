/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = new Array(m).fill().map(() => new Array(n).fill().map(() => 0))
    
    for(let i = 0; i < m; i++) {
        memo[i][0] = 1;
    }

    for(let j = 0; j < n; j++) {
        memo[0][j] = 1;
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
        }
    }
    
    return memo[m - 1][n - 1];
};

console.log(uniquePaths(7, 3))