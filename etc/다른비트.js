function solution(numbers) {
    const answer = [];    
    
    numbers.forEach(n => {
        if(n % 2 === 0) {
            answer.push(n + 1);
        } else {
            let target = "0" + n.toString(2);
            const len = target.length;

            for(let i = len - 1; i >= 0; i--) {
                if(target[i] === "0") {
                    target = parseInt(target.slice(0, i) + "10" + target.slice(i + 2), 2);
                    answer.push(target);
                    break;
                }
            }
        }
    })

    return answer;
}

console.log(solution([2, 7]))