/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2);
    let answer = 0;
    for(let i = 0; i < 32; i++) {
        const mask = 1 << i;
        for(let j = 0; j < n.length; j++) {
            if(mask & n[j]) answer++;
        }
    }
    return answer;
};

console.log(hammingWeight(00000000000000000000000000001011))