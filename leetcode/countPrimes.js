/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // if(n <= 2) return 0;
    const m = new Array(n + 1).fill(0).map((v, i) => i);
   
    for(let i = 2; i <= n; i++) {
        if(m[i] === 0) continue;

        for(let j = 2 * i; j <= n; j += i) {
            if(m[j] === 0) continue;
            m[j] = 0;
        }
    }
    return m.slice(2, m.length - 1).filter(v => v > 0).length;
};

console.log(countPrimes(2))