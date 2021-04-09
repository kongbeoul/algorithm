/**
 * @writen 2021.04.07
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
})
.on('close', function () {
    const [N, M] = input[0].split(" ").map(v => +v);
    const mapData = input[1].split(" ").map(v => +v);
    let start = 0, end = M, step = M;

    const map = [];
    
    for(let i = 1; i <= mapData.length / step; i++) {
        map.push(mapData.slice(start, end));
        start += step;
        end += step;
    }

    const matrix = new Array(N).fill().map(v => new Array(M).fill(0));
    const distance = [[-1, 1], [0, 1], [1, 1]];
    for(let x = 0; x < N; x++) {
        matrix[x][0] = map[x][0];
        for(let y = 1; y < M; y++) {
            matrix[x][y] = 0;
        }
    }

    console.log(matrix);

    for(let x = 0; x < N; x++) {
        for(let y = 0; y < M; y++) {
            for(let [dx, dy] of distance) {
                const nx = x + dx;
                const ny = y + dy;
                if(nx >= 0 && nx < N && ny >= 0 && ny < M) {
                    matrix[nx][ny] = Math.max(matrix[nx][ny], matrix[x][y] + map[nx][ny]);
                }
            }
        }
    }
    console.log(matrix);

    console.log(matrix[N - 1][M - 1]);
    process.exit();
});