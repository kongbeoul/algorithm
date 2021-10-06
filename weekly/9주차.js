function solution(n, wires) {
    const map = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(Infinity));

    let answer = n;

    for(const [x, y] of wires) {
        map[x][y] = 1;
        map[y][x] = 1;
    }

    function bfs(start, queue, visited) {
        if(start > n) return;

        for(let i = 1; i <= n; i++) {
            if(map[start][i] === 1 && !visited[i]) {
                visited[i] = true;
                queue.push(i);
                bfs(i, queue, visited);
            }
        }

    }

    for(const [x, y] of wires) {
        map[x][y] = Infinity;
        map[y][x] = Infinity;
        const queue = [];
        const visited = new Array(n + 1).fill(false);

        visited[1] = true;
        queue.push(1);
        bfs(1, queue, visited);
        
        map[x][y] = 1;
        map[y][x] = 1;
        
        const len = queue.length;
        answer = Math.min(answer, Math.abs((n - len) - len));
    }

    return answer;
    
}

console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]));
console.log(solution(4, [[1,2],[2,3],[3,4]]));
console.log(solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]));
