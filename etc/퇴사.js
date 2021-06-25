/**
 * @written 2021.04.09
 * 테스트 케이스
 * 7
 * 3 10
 * 5 20
 * 1 10
 * 1 20
 * 2 15
 * 4 40
 * 2 200
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
let input = [];
 
rl.on('line', function (line) {
    input.push(line);
})
.on('close', function () {
    const N = parseInt(input[0]);
    input = input.slice(1).map(v => v.split(" ").map(_v => +_v));
    const dp = new Array(N + 1).fill(0);
    const time = input.map(v => v[0]);
    const price = input.map(v => v[1]);

    time.unshift(0);
    price.unshift(0);

    let result = 0;

    for(let i = N; i > 0; i--) {
        const t = time[i] + i;
        if (t <= N) {
            dp[i] = Math.max(result, dp[t] + price[i]);
            result = dp[i];
        } else {
            dp[i] = result;
        }
        console.log(dp);
    }

    console.log(result);

    
    
    process.exit();  
})