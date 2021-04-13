/**
 * @written 2021.04.13
 * 못 푼 문제
 */

const input = `
4
6
2
2
3
3
4
4
`;

function solution(input) {
    const N = parseInt(input[0]);
    const A = parseInt(input[1]);
    input = input.slice(2).map(v => +v).sort((a, b) => a - b);
    
    const dock = new Array(N).fill(-1);

    for(let i = 0; i < A; i++) {
        const q = input[i];
        let nq = q - 1;

        while(nq >= 0) {
            if(dock[nq] === -1) {
                dock[nq] = [i, q];
                break;
            } else {
                nq = nq - 1;
            }
        }
    }
    
console.log(dock);

};

console.log(solution(input.split("\n").slice(1, -1)))
