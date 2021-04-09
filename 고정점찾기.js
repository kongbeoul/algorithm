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
})
.on('close', function () {
    const N = input[0];
    const sequence = input[1].split(" ").map(v => +v);

    let result = -1;

    function bisect(array, start, end) {
        if(start > end) return null;
        const mid = parseInt((start + end) / 2);

        if(array[mid] == mid) {
            result = mid;
        } else {
            bisect(array, start, mid - 1);
            bisect(array, mid + 1, end);
        }

        return result;
    }

    console.log(bisect(sequence, 0, sequence.length - 1));
     
    process.exit();
});