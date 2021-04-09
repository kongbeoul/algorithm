function solution(N, stages) {
    stages = stages.sort((a, b) => a - b);
    let state = new Array(N + 1).fill(0);
    let total = stages.length;
    let failure = [];

    for(let v of stages) {
        if(state[v] >= 0) {
            state[v] += 1;
        }
    }

    for(let i = 1; i < N + 1; i++) {
        failure.push({
            key: i,
            fail: state[i] / total
        });
        total -= state[i];
    };
    
    failure = failure.sort((a, b) => b["fail"] - a["fail"]);
    return failure.map(v => v["key"]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));