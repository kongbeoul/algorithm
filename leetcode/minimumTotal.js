/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // Start from the 2nd to the bottom of the triangle
    for (let i = triangle.length-2; i >= 0; i--)
        // Add previous row cells to current cells and set the sum that is the smallest
        for (let j = 0; j < triangle[i].length; j++)
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
    // The cell at the top of the triangle will be the smallest sum of the path that goes from the bottom to the top
    return triangle[0][0]

};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log(minimumTotal([[-10]]))
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))