/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(!digits) return [];

    const letters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    const answer = [];

    function create(prefix, next) {
        if(!next) {
            answer.push(prefix);
            return;
        };
        for(let i = 0; i < letters[next[0]].length; i++) {
            const a = letters[next[0]][i];
            create(prefix + a, next.substring(1));
        }
    }

    for(let i = 0; i < letters[digits[0]].length; i++) {
        const a = letters[digits[0]][i];
        create(a, digits.substring(1));
    }
    return answer;
};

console.log(letterCombinations("23"))