function solution(s) {
    const answer = new Array(s.length).fill('O');

    const hash = {
        '[': 1,
        ']': -1,
        '{': 2,
        '}': -2,
        '(': 3,
        ')': -3
    }

    for(let i = 0, len = s.length; i < len; i++) {
        let ns = s.slice(i) + s.slice(0, i);
        const stack = [];

        for(let j = 0; j < len; j++) {
            if(ns[j] === '[' || ns[j] === '{' || ns[j] === '(') {
                stack.push(ns[j])
            } else if(ns[j] === ']' || ns[j] === '}' || ns[j] === ')') {
                if(stack.length === 0 || hash[stack[stack.length - 1]] + hash[ns[j]] !== 0) {
                    answer[i] = 'X';
                    break;
                }  

                if(hash[stack[stack.length - 1]] + hash[ns[j]] === 0) {
                    stack.pop();
                }
            }
        }

        if(stack.length > 0) {
            answer[i] = 'X'
        }
    }
    return answer.filter(v => v === 'O').length;

}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
console.log(solution("{{{}"))