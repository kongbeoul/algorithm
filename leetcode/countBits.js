/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = [0];

    for(let i = 1; i <= n; i++) {
        dp[i] = dp[Math.floor(i / 2)] + Math.floor(i % 2);
    }

    return dp
};

console.log(countBits(5));