/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    const M = image.length;
    const N = image[0].length;
    const queue = [];
    const visited = new Array(M).fill(null).map(() => new Array(N).fill(false));
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    const color = image[sr][sc];

    queue.push([sr, sc]);
    visited[sr][sc] = true;
    image[sr][sc] = newColor;

    while(queue.length > 0) {
        const [x, y] = queue.shift();

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
            if(image[nx][ny] !== color) continue;

            if(image[nx][ny] === color) {
                if(!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    image[nx][ny] = newColor;
                    queue.push([nx, ny]);
                }
            }
        }

    }

    return image;
};

console.log(floodFill(
    [[1,1,1],[1,1,0],[1,0,1]],
    1,
    1,
    2
))
console.log(floodFill(
    [[0,0,0],[0,0,0]],
    0,
    0,
    2
))