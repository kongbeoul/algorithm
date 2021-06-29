/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const depth = n * 2;
    const degree = 1;
    let answer = [];

    function create(sum, current, degree) {
        if(degree === depth && sum === 0) {
            answer.push(current);
            return;
        };
        if(degree === depth && sum !== 0) return false;

        create(sum + 1, current + '(', degree + 1);
        create(sum - 1, current + ')', degree + 1);
    }
    create(1, '(', degree);

    answer = answer.filter(v => {
        let count = 0;
        for(let i = 0; i < v.length - 1; i++) {
            switch(v[i]) {
                case '(':
                    count += 1;
                    break;
                case ')':
                    count -= 1;
                    break;
            }
            if(count < 0) return false;
        }
        return v;
    })
    return answer;
};

console.log(generateParenthesis(1))