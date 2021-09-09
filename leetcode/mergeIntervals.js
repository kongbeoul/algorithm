/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const len = result.length - 1;
        if (start <= result[len][1]) {
            result[len][1] = Math.max(end, result[len][1]);
        } else {
            result = [...result, intervals[i]];
        }
        
    }
    return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))
console.log(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))