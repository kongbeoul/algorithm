function solution(n,a,b) {
    let answer = 1;

    if(a % 2 === 0) {
        if(a - 1 === b) return 1;
    } else {
        if(a + 1 === b) return 1;
    }

    while(answer < n / 2) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);

        answer++;
        if(a % 2 === 0) {
            if(a - 1 === b) break;
        } else {
            if(a + 1 === b) break;
        }

    }

    return answer;
}

console.log(solution(8, 4, 5));