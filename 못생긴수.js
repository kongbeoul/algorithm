/**
 * @writen 2021.04.10
 * 
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
    const N = line;
    const dp = new Array(+N + 1).fill(0);
    
    dp[1] = 1;

    let index = 1, n = 2;

    while(index < N) {
        for(let v of [2, 3, 5]) {
            if(n % v == 0) {
                index += 1;
                dp[index] = n;
                break;
            }
        }
        n += 1;
    }

    console.log(dp[N])


  rl.close();
}).on("close", function() {
  process.exit();
});