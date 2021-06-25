/**
 * @written 2021.04.09
 * 정수 삼각형
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
    const N = parseInt(input[0]);

    const map = input.slice(1).map(v => v.split(" ").map(_v => +_v));
    const matrix = new Array(N).fill(-1).map(v => new Array(N).fill(-Infinity))
    const distance = [[-1, -1], [-1, 0]];
    let max = -Infinity;
    
    matrix[0][0] = map[0][0];

    for(let x = 1; x < N; x++) {
        for(let y = 0; y <= x; y++) {
            for(let [dx, dy] of distance) {
                const nx = x + dx;
                const ny = y + dy;
                
                if(nx >= 0 && ny >= 0 && map[nx][ny] !== undefined) {
                    matrix[x][y] = Math.max(matrix[x][y], map[x][y] + matrix[nx][ny]);
                    max = Math.max(max, matrix[x][y])
                }
            }
        }
    }

    console.log(max);
   
    process.exit();  
})