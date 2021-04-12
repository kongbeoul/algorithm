/**
 * @written 2021.04.12
 * 
 */

const input = `
5
3 7 2 0 1
2 8 0 9 1
1 2 1 8 1
9 8 9 2 0
3 6 5 1 5
`;

function solution(input){ 
    const N = parseInt(input[0]);
    const map = input.slice(1).map(v => v.split(" ").map(_v => parseInt(_v)));

    const temp = new Array(N).fill().map(() => new Array(N));
    const visited = new Array(N).fill().map(() => new Array(N).fill(false))

    visited[0][0] = true;

    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            temp[i][j] = map[i][j];
        }
    }

    let x = y = 0;

    while(x !== N - 1 || y !== N - 1) {
        let next = [], cost = Infinity;
        for(let [dx, dy] of distance) {
            const nx = x + dx;
            const ny = y + dy;
            if(nx >= 0 && nx < N && ny >= 0 && ny < N) {
                if(visited[nx][ny] === false) {
                    visited[nx][ny] = true;

                    if(nx === N - 1 && ny === N - 1) {
                        next = [nx, ny];
                        cost = map[nx][ny];
                        break;
                    }

                    if(map[nx][ny] <= cost) {
                        next = [nx, ny];
                        cost = map[nx][ny];
                    }
                }
            }
        }

        const [nx, ny] = next;
        console.log(nx, ny);

        temp[nx][ny] = temp[x][y] + cost;
        x = nx;
        y = ny;
    }
   
    console.log(temp[N - 1][N - 1]);

}

console.log(solution(input.split("\n").slice(1, -1)))