const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    const N = input[0];
    let array = input[1].split(" ");

    let result = Infinity, answer = 0;

    array = array.sort((a, b) => a - b);

    for(let v of array) {
        let sum = 0;
        for(let i = 0; i < N; i++) {
            sum += Math.abs(v - array[i]);
        }
        if(sum < result) {
            answer = v;
            result = Math.min(result, sum);
        }
    }

    console.log(result, +answer);

    process.exit();
});