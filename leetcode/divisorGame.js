/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let count = 0;
    while(n > 1) {
        const set = new Set();
        for(let i = 1; i < n; i++) {
            if(n % i === 0) set.add(i);
            n -= [...set][0];
            count++;
        }
    }

    return count % 2 === 0 ? false : true;
};

console.log(divisorGame(2));
console.log(divisorGame(3));
console.log(divisorGame(5));