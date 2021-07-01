/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    const copy = matrix.reduce((a, c) => {
        a.push(c.slice());
        return a;
    }, []);

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            matrix[j][(n - 1) - i] = copy[i][j];
        }
    }

    return matrix;
};

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));