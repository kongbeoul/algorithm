/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    const visited = new Array(M).fill(null).map(() => new Array(N).fill(false));
    let count = 0;

    const dfs = (x, y) => {
        if(x < 0 || x >= M || y < 0 || y >= N) return false;  
        if(visited[x][y]) return false;
        visited[x][y] = true;
        if(grid[x][y] === "1") {
            dfs(x - 1, y);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x, y + 1);
            return true;
        }
    }

    for(let i = 0; i < M; i++) {
        for(let j = 0; j < N; j++) {
            if(grid[i][j] === "1") {
                if(!visited[i][j]) {
                    if(dfs(i, j)) count++;
                }
            } 
        }
    }

    return count;
};

console.log(numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]
))

console.log(numIslands(
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
))