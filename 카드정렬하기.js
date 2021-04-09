/**
 * @writen 2021.04.06
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let input = [];

rl.on('line', function (line) {
    input.push(line);
    //rl.close();
  })
  .on('close', function () {
    const N = input[0];
    const cards = input.slice(1).map(v => +v);

    let result = Infinity;
  
    for (let v of cards) {
        let prev = v, sum = 0;
        for(let i = 0; i < N; i++) {
            if(v !== cards[i]) {
                sum = sum + prev + cards[i]
                prev = sum;
            }
        }
        result = Math.min(result, sum);
    }
    console.log(result);
    process.exit();
});