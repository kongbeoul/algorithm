/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const answer = [];
    const visit = Array.from(Array(m), () => Array(n).fill(false));

    function inRange(x, y) {
        return 0 <= x && x < m && 0 <= y && y < n;
    }

    function dfs(x, y, dir) {
        if (!inRange(x, y) || visit[x][y]) return;

        visit[x][y] = true;
        answer.push(matrix[x][y]);

        let nx = x + dx[dir];
        let ny = y + dy[dir];

        if (inRange(nx, ny) && !visit[nx][ny]) {
        dfs(nx, ny, dir);
        } else {
        dir = (dir + 1) % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];

        dfs(nx, ny, dir);
        }
    }

    dfs(0, 0, 0);

    return answer;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))