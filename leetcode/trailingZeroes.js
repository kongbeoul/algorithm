/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let answer = 0;
    while(n > 0) {
        n = parseInt(n / 5);
        answer += n;
    }
    return Math.floor(answer);
};

console.log(trailingZeroes(4));