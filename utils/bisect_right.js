function bisect_right(array, target, start, end) {
    if(start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if((mid === array.length - 1 || target < array[mid + 1]) && array[mid] === target) {
        return mid;
    }
    else if(array[mid] > target) {
        return bisect_right(array, target, start, mid - 1)
    }
    else {
        return bisect_right(array, target, mid + 1, end);
    }
}

console.log(bisect_right([1, 2, 2, 2, 4], 2, 0, 4))

