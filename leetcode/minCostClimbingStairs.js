/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const N = cost.length;
    const dp = [cost[0], cost[1]];

    for(let i = 2; i < N; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[N - 1], dp[N - 2]);
};

console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))