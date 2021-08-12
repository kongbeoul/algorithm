function solution(arr1, arr2) {
    const N = arr1.length;
    const K = arr2.length;
    const M = arr2[0].length;

    const answer = [];

    
    for(let i = 0; i < N; i++) {
        let temp = [];
        for(let k = 0; k < M; k++) {
            let sum = 0;
            for(let j = 0; j < K; j++) {
                sum = sum + arr1[i][j] * arr2[j][k];
            }
            temp.push(sum);
        }
        answer.push(temp);
    }
    
    return answer;
}

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));

