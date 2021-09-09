/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    const n = newInterval;

    for(let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if(end < n[0]) {
            result.push([start, end]);
        } else if(start > n[1]) {
            result.push(newInterval);
            return [...result, ...intervals.slice(i)]
        } else {
            n[0] = Math.min(start, n[0]);
            n[1] = Math.max(end, n[1]);
        }
    }
    result.push(n);
    return result;
};

console.log(insert([[1,3],[6,9]], [2,5]))