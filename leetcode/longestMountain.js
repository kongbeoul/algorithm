/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    const N = arr.length;
    let answer = 0;
    let base = 0;

    while(base < N) {
        let end = base;

        while(end + 1 < N && arr[end] < arr[end + 1]) end++;

        if(end + 1 < N && arr[end] > arr[end + 1]) {
            while(end + 1 < N && arr[end] > arr[end + 1]) end++;
            answer = Math.max(answer, end - base + 1)
        }

        base = Math.max(end, base + 1);
    }

    return answer;
};

console.log(longestMountain([2,1,4,7,3,2,5]))