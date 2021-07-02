function solution(n, s, a, b, fares) {
    const map = new Array(n + 1).fill().map(() => new Array(n + 1).fill().map(() => Number.MAX_SAFE_INTEGER));
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if(i == j) map[i][j] = 0;
        }
    }

    for(const [c, d, f] of fares) {
        map[c][d] = f;
        map[d][c] = f;
    }

    let answer = map[s][a] + map[s][b];

    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
            }
        }
    }

    for(let i = 1; i <= n; i++) {
        const price = map[s][i] + map[i][a] + map[i][b];
        answer = Math.min(price, answer);
    }

    return answer;
}

console.log(solution(6, 4, 5, 6, [[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]))