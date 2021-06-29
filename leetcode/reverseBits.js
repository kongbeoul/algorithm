/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let answer = 0;
    for(let i = 0; i < 31; i++) {
        const mask = n & 1;
        n = n >>> 1;
        answer += mask;
        answer = answer << 1;
    }
    answer += n & 1;
    return answer >>> 0;
};

console.log(reverseBits(43261596))