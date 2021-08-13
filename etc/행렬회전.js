function solution(rows, columns, queries) {
  
    let map = new Array(rows).fill(null).map((_, i) => {
        return new Array(columns).fill(null).map((_, j) => i * columns + (j + 1))
    })
    let copy = map.map(v => [...v ]);

    const answer = [];

    queries = queries.map(query => query.map(q => --q));

    for(const [sx, sy, ex, ey] of queries) {
        let top = sx;
        let bottom = ex;
        let left = sy;
        let right = ey;

        let min = Number.MAX_SAFE_INTEGER;

        while(top < bottom) {

            while(left < right) {
                const value = map[top][left];
                min = Math.min(min, value);
                left++;
                copy[top][left] = value;
            }

            const value = map[top][left];
            min = Math.min(min, value);
            top++;
            copy[top][left] = value;
        }

        right = sy;
        bottom = sx;

        while(top > bottom) {

            while(left > right) {
                const value = map[top][left];
                min = Math.min(min, value);
                left--;
                copy[top][left] = value;
            }

            const value = map[top][left];
            min = Math.min(min, value);
            top--;
            copy[top][left] = value;
        }

        answer.push(min);

        map = copy.map(v => [...v ]);
        copy = map.map(v => [...v ]);
    }

     return answer;
}

console.log(solution(6, 6, [[2,2,5,4], [3, 3, 6, 6], [5, 1, 6, 3]]))
console.log(solution(3, 3, [[1,1,2,2], [1, 2, 2, 3], [2,1,3,2], [2,2,3,3]]));
console.log(solution(100, 97, [[1,1,100,97]]))