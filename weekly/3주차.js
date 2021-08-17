function solution(game_board, table) {
    const len = game_board.length;
    const direction = [[0, -1], [1, 0], [0, 1], [-1, 0]];

    const visited = new Array(len).fill(null).map(() => new Array(len).fill(false));     
    let visited2 = new Array(len).fill(null).map(() => new Array(len).fill(false));     

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

    function rebase(array) {
        const N = array.length;
        const temp = new Array(N).fill(null).map(() => new Array(N).fill(0));
        const dq = [];
        for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length; j++) {
                if(array[i][j] === 1) {
                    dq.push([i, j])
                };
            }
        }

        let minX = Infinity;
        let minY = Infinity;

        for(const [x, y] of dq) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
        }

        for(let i = 0; i < dq.length; i++) {
            dq[i][0] -= minX;
            dq[i][1] -= minY;
        }

        for(const [nx, ny] of dq) {
            temp[nx][ny] = 1;
        }

        return temp;
    }

    function bfs(i, j, map, visited, value) {
        const N = map.length;
        const q = [];
        const dq = [];
        const temp = new Array(N).fill(null).map(() => new Array(N).fill(0));
        dq.push([i, j]);
        q.push([i, j]);
        visited[i][j] = true;

        while(q.length > 0) {
            const [x, y] = q.shift();
            for(const [dx, dy] of direction) {
                const nx = x + dx;
                const ny = y + dy;
                if(nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny] || map[nx][ny] !== value) continue;
                visited[nx][ny] = true;
                dq.push([nx, ny]);
                q.push([nx, ny]);
            }
        }

        let minX = Infinity;
        let minY = Infinity;

        for(const [x, y] of dq) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
        }

        for(let i = 0; i < dq.length; i++) {
            dq[i][0] -= minX;
            dq[i][1] -= minY;
        }

        for(const [nx, ny] of dq) {
            temp[nx][ny] = 1;
        }

        // if(value === 1) {
        //     console.log(i, j, visited2);
        // }

        return temp;
    }

    function isSame(board, block) {
        const N = board.length;
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                if(board[i][j] !== block[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    function counting_block(block) {
        let count = 0;
        for(let i = 0; i < block.length; i++) {
            for(let j = 0; j < block.length; j++) {
                if(block[i][j] === 1) count += 1;
            }
        }        
        return count;
    }

    function remove(i, j) {
        const q = [[i, j]];
        
        
        while(q.length > 0) {
            const [x, y] = q.shift();
            for(const [dx, dy] of direction) {
                const nx = x + dx;
                const ny = y + dy;
                if(nx < 0 || nx >= table.length || ny < 0 || ny >= table.length) continue;
                if(visited2[nx][ny] || table[nx][ny] === 0) continue;
                q.push([nx, ny]);
                table[nx][ny] = 0;
                visited2[nx][ny] = true;
               
            }
        }
        table[i][j] = 0;
        visited2[i][j] = true;
        if(i === 0 && j === 3) {
            console.log(table)
         }
    }
    let answer = 0;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(game_board[i][j] === 0 && !visited[i][j]) {
                const m = bfs(i, j, game_board, visited, 0);
                visited2 = new Array(len).fill(null).map(() => new Array(len).fill(false));
                for(let x = 0; x < len; x++) {
                    for(let y = 0; y < len; y++) {
                        if(table[x][y] === 1 && !visited2[x][y]) {
                            
                            let n = bfs(x, y, table, visited2, 1);
                            for(let k = 0; k < 4; k++) {
                                if(isSame(m, n)) {
                                    remove(x, y);
                                }
                                n = rebase(rotate(n));
                            }
                        }
                    }
                }
                
            }
        }
    }


}

console.log(solution(
    [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]],
    [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]
))
