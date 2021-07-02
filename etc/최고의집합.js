function solution(n, s) {
    if(n > s) return [ -1 ];

    const answer = new Array(n);
    const q = Math.floor(s / n);
    const r = s % n;

    for(let i = 0; i < n; i++) {
        if(i >= n - r) answer[i] = q + 1;
        else answer[i] = q;
    }
    return answer;
}

console.log(solution(2, 9));