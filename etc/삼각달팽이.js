/**
 * N = 4
 * 
 * (0, 0) 
 * (1, 0), (1, 1) 
 * (2, 0)  (2, 1), (2, 2) 
 * (3, 0), (3, 1), (3, 2), (3, 3)
 * 
 *  1, 2, 3, 3, 3, 3, 2, 1, 2
 *  2, 3, 4, 5, 6, 7, 8, 9, 10
 * 
 * 
 */

function solution(n) {
    const answer = new Array(n).fill('').map((v, i) => new Array(++i).fill(0));
    
    let row = -1
    let col = 0;

    let value = 1;

    for(let i = n; i > 0; i -= 3) {
        for(let j = 0; j < i; j++) { answer[++row][col] = value++; }
        for(let j = 0; j < i - 1; j++) { answer[row][++col] = value++; }
        for(let j = 0; j < i - 2; j++) { answer[--row][--col] = value++ } 
    } 

    return answer.flat();
}
console.log(solution(4));