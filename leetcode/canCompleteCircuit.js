/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(gas.reduce((a, c) => { return a += c }, 0) < cost.reduce((a, c) => { return a += c }, 0)) return -1;

    let start = 0, tank = 0;
    const len = gas.length;

    for(let i = 0; i < len; i++) {
        tank += gas[i] - cost[i];
        if(tank < 0) {
            tank = 0;
            start = i + 1;
        }
    }

    return start > len ? -1 : start;
};

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));