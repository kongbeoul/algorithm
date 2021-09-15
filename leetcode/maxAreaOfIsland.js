/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let answer = 0;
    const M = grid.length;
    const N = grid[0].length;
    const visited = new Array(M).fill(null).map(() => new Array(N).fill(false));

    const dfs = (x, y) => {
       if(x < 0 || x >= M || y < 0 || y >= N || visited[x][y] || grid[x][y] === 0) return 0;
       visited[x][y] = true;
       if(grid[x][y] === 1) {
            return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
       }
    }

    for(let i = 0; i < M; i++) {
        for(let j = 0; j < N; j++) {
            if(grid[i][j] === 1 && !visited[i][j]) {
                const result = dfs(i, j);
                answer = Math.max(answer, result);
            }
        }
    }
    return answer;
};

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))
console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]))
