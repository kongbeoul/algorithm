function rotate(array) {
    const N = array.length;
    const temp = new Array(N).fill(null).map(() => new Array(N).fill(0));
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            temp[i][j] = array[N - j - 1][i];
        }
    }
    return temp;
}