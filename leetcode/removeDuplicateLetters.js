/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const counter = {};

    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(!counter[s[i]]) counter[s[i]] = 0;
        counter[s[i]]++;
    }

    for(let i = 0; i < s.length; i++) {
        counter[s[i]]--;

        if(stack.includes(s[i])) continue;
 
        while(stack.length > 0 && s[i] < stack[stack.length - 1] && counter[stack[stack.length - 1]] > 0) stack.pop();
        stack.push(s[i]);
    }

    return stack.join('');
};

console.log(removeDuplicateLetters('bcabc'))
console.log(removeDuplicateLetters('cbacdcbc'))