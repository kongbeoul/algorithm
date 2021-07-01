/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const dp = new Array(n + 1);
    dp[0] = "0";
    dp[1] = "1";

    function variant(m) {
        m = m.toString(2);
        let count = 1;
        let result = '';
        
        for(let i = 0; i < m.length; i++) {
            if(m[i] !== m[i + 1]) {
                result += count + m[i];
                count = 1;
            } else {
                count++;
            }
        }

        return result;
    } 

    for(let i = 2; i < n + 1; i++) {
        dp[i] = variant(dp[i - 1]);
    }
    
    return dp[n];
};

console.log(countAndSay(5));