function solution(n, k, cmd) {
    const answer = new Array(n).fill("O");
    const stack = [];
    let count = 0;
    
    for(let i = 0; i < cmd.length; i++) {
        if(cmd[i].includes("D") || cmd[i].includes("U")) {
            const [ operation, distance ] = cmd[i].split(" ");
            if(operation === "D") {
                k += Number(distance);
            } else if(operation === "U") {
                k -= Number(distance);
            }
        } else if(cmd[i] === "C") {
            console.log(`${i}, ${k}, ${count}`);
            stack.push(k + count);
            if(k === (n - 1) - count) k -= 1;
            count++;
        } else if(cmd[i] === "Z") {
            const index = stack.pop();
            if(index <= k) {
                k += 1;
            }
            count--;
        }
    }
    // console.log(k + count);
    // console.log(stack);

    return answer.join("");
}

console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))
console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]))