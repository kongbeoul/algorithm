/**
 * @param {number} n
 * @return {number}
 */

// DP
// var climbStairs = function(n) {
//     const dp = [0, 1, 2];

//     for(let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     return dp[n];
// };

// 꼬리재귀
var climbStairs = function(n) {
    let last = 2;
        lastlast = 1,
        answer = 0;
    
    if(n == 1) return lastlast;
    if(n == 2) return last;

    for(let i = 3; i <= n; i++) {
        answer = last + lastlast;
        lastlast = last;
        last = answer;
    }

    return answer;
};


console.log(climbStairs(4));