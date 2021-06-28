/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let profit = 0;

    while(left < prices.length - 1) {
        if(prices[left] < prices[left + 1]) {
            profit += prices[left + 1] - prices[left]
        }
        left++;
        while(prices[left] > prices[left + 1]) left++;
    }

    return profit;

};

console.log(maxProfit([1, 2, 3, 4, 5]))