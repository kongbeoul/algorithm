/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    for(let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0]; 
    }

    for(let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            const min = Math.min(grid[i - 1][j], grid[i][j - 1]);
            grid[i][j] += min;
        }
    }

    return grid[m - 1][n - 1];

};

console.log(minPathSum([[0, 0, 1]]))