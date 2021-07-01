/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1) return 0;

    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const memo = new Array(m).fill().map(() => new Array(n).fill().map(() => 0));

    memo[0][0] = 1;

    for(let i = 1; i < m; i++) {
        if(obstacleGrid[i][0] === 1) continue;
        memo[i][0] = memo[i - 1][0];
    }

    for(let j = 1; j < n; j++) {
        if(obstacleGrid[0][j] === 1) continue;
        memo[0][j] = memo[0][j - 1];
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(obstacleGrid[i][j] === 1) continue;
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
        }
    }

    return memo[m - 1][n - 1];

};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))