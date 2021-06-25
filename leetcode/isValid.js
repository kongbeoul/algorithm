var isValid = function(s) {

    const hash = {
        '(': 1,
        ')': -1,
        '{': 2,
        '}': -2,
        '[': 3,
        ']': -3
    }
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            answer.push(s[i]);
        } else if(s[i] === ')' || s[i] === '}' || s[i] === ']') {
            const p = answer.pop();
            if(hash[p] + hash[s[i]] !== 0) {
                return false;
            }
        }
    }

    return answer.length === 0 ? true : false;

}

console.log(isValid("()"));