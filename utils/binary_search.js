function binary_search(target, array, start, end) {
    if(start > end) return false;
    const mid = Math.floor((start + end) / 2);
    if(array[mid] === target) return mid;
    else if(array[mid] > target) return binary_search(target, array, start, mid - 1);
    else if(array[mid] <= target) return binary_search(target, array, mid + 1, end);
}