function solution(rows, columns, queries) {
    const map = new Array(rows).fill(null).map((_, i) => {
        return new Array(columns).fill(null).map((_, j) => i * columns + (j + 1))
    })

    queries = queries.map(query => query.map(q => --q));

    for(const [sx, sy, ex, ey] of queries) {
        let top = sx;
        let bottom = ex;
        let left = sy;
        let right = ey;

        while(top <= bottom) {
            while(left < right) {
                console.log(map[top][left])
                left++;
            }
            console.log(map[top][left])
            top++;
        }

        left -= 1;
        right = sy;
        top -= 1;
        bottom = sx;

        while(top > bottom) {
            while(left > right) {
                console.log(map[top][left])
                left--;
            }
            console.log(map[top][left]);
            top--;
        }


    }


}

// console.log(solution(6, 6, [[2,2,5,4]]))
console.log(solution(3, 3, [[1,1,2,2]]))