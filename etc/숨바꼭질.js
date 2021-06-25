/**
 * @writen 2021.04.13
 * 
 */

const input = `
6 7
3 6
4 3
3 2
1 3
1 2
2 4
5 2
`;

function solution(input) {
    const [N, M] = input[0];
    input = input.slice(1);

    const map = new Array(parseInt(N) + 1).fill().map(v => new Array(parseInt(N) + 1).fill(Infinity));

    for(let x = 0; x <= N; x++) {
        map[x][0] = 0;
        for(let y = 0; y <= N; y++) {
            map[0][y] = 0;
            if(x === y) {
                map[x][y] = 0;
            }
        }
    }

    input.forEach(v => {
        const [x, y] = v.split(" ");
        map[x][y] = 1;
        map[y][x] = 1;
    });
  
    for(let k = 1; k <= N; k++) {
        for(let i = 1; i <= N; i++) {
            for(let j = 1; j <= N; j++) {
                map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
            }
        }
    }

    let max = Math.max.apply(null, map[1]);

    const result = map[1].reduce((a, b, i) => {
        if(b === a[1]) {
            if(i < a[0]) {
                a[0] = i;
            }
            a[2] += 1;
        }

        return a;
    }, [Infinity, max, 0]);

    return result.join(" ");
}

console.log(solution(input.split("\n").slice(1, -1)))