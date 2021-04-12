/**
 * @writen 2021.04.12
 * 
 */

let input = `
5
14
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4
`;

function solution(input) {
    const N = parseInt(input[0]);
    const M = parseInt(input[1]);

    let map = new Array(N + 1).fill(-1).map(v => new Array(N + 1).fill(Infinity));

    for(let x = 0; x < N + 1; x++) {
        for(let y = 0; y < N + 1; y++) {
            map[0][y] = 0;
            if(x === y) {
                map[x][y] = 0;
            }
        }
        map[x][0] = 0;
    }
    
    input.slice(2).forEach(v => {
        const [x, y, cost] = v.split(" ");
        map[x][y] = Math.min(map[x][y], cost);
    })

    for(let k = 1; k <= N; k++) {
        for(let i = 1; i <= N; i++) {
            for(let j = 1; j <= N; j++) {
                map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
            }
        }
    }

    map = map.slice(1).map(v => v.slice(1));

    map.forEach(v => {
        v.forEach(_v => {
            if(_v === Infinity) {
                console.log(0);
            } else {
                console.log(_v)
            }
        })
    })
}

solution(input.split("\n").slice(1, -1))