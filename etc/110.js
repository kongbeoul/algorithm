function solution(s) {
    const answer = [];
    s.forEach(_s => {
        _s = _s.split("");
        const stack = [];

        let count = 0;

        for(let i = 0; i < _s.length; i++) {
            if(stack.length >= 2) {
                const first = stack.pop();
                const second = stack.pop();
                const third = _s[i];

                if(first === "1" && second === "1" && third === "0") {
                    count++;
                    continue;
                }
                stack.push(second, first, third);
            } else {
                stack.push(_s[i]);
            }
        }

        if(count === 0) {
            answer.push(_s.join(""));
        } else {
            const list = [];
            const keyword = "011";

            while(stack.length) {
                const n = stack.pop();
                if(n === "0") {
                    stack.push(n);
                    break;
                } 
                list.push(n);
            }

            while(count) {
                list.push(...keyword);
                count--;
            }

            while(stack.length) {
                list.push(stack.pop());
            }

            answer.push(list.reverse().join(""));
        }
    })

    return answer;
}

console.log(solution(["1110","100111100","0111111010"]	))
console.log(solution(["1100111011101001"]))