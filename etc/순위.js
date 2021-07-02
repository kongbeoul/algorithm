function solution(n, results) {
    const ranked = new Array(n + 1).fill().map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
    
    for(const [ winner, loser ] of results) {
        ranked[winner][loser] = 1;
        ranked[loser][winner] = -1;
    }

    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                if(ranked[i][j] === Number.MAX_SAFE_INTEGER) {
                    if(ranked[i][k] === 1 && ranked[k][j] === 1) ranked[i][j] = 1;
                    if(ranked[i][k] === -1 && ranked[k][j] === -1) ranked[i][j] = -1;
                }
            }
        }
    }

    let answer = 0;
    for(let i = 1; i <= n; i++) {
        let has_infinity = false;
        for(let j = 1; j <= n; j++) {
            if(i !== j && ranked[i][j] === Number.MAX_SAFE_INTEGER) {
                has_infinity = true;
                break;
            }
        }
        answer += has_infinity ? 0 : 1;
    }

    return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))