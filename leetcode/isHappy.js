/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = n.toString();
    let sum = 0;

    const hash = {};

    while(sum !== 1) {
        for(let i = 0; i < n.length; i++) {
            sum += Math.pow(parseInt(n[i]), 2);
        }

        if(hash[sum] !== undefined) break;
        if(hash[sum] === undefined) hash[sum] = 0;
        if(sum === 1) break;

        n = sum.toString();
        sum = 0;
    }
    return sum === 1;
};

console.log(isHappy(2));