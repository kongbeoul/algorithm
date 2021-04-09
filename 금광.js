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
    const T = input[0];

    input = input.slice(1);

    for(let i = 0; i < T; i++) {
        const testCase = input.slice(T * i, T * (i + 1) + 1);
        const [N, M] = testCase[0].split(" ").map(v => +v);
        const mapData = testCase[1].split(" ").map(v => +v);

        solution(N, M, mapData);
    }
   
    function solution(N, M, mapData) {
        let start = 0, end = M, step = M, max = -Infinity;

        const map = [];
    
        for(let i = 1; i <= mapData.length / step; i++) {
            map.push(mapData.slice(start, end));
            start += step;
            end += step;
        }

        const matrix = new Array(N).fill().map(v => new Array(M).fill(0));
        const distance = [[-1, -1], [0, -1], [1, -1]];
        for(let x = 0; x < N; x++) {
            matrix[x][0] = map[x][0];
            for(let y = 1; y < M; y++) {
                matrix[x][y] = 0;
            }
        }

        for(let y = 1; y < M; y++) {
            for(let x = 0; x < N; x++) {
                for(let [dx, dy] of distance) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
                        matrix[x][y] = Math.max(matrix[x][y], matrix[nx][ny] + map[x][y]);
                    }
                }
                max = Math.max(max, matrix[x][y]);
            }
        }
        console.log(max);
    }
    process.exit();
});