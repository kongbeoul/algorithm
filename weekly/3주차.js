function solution(game_board, table) {
    const len = game_board.length;
    const direction = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const visited = new Array(len).fill(null).map(() => new Array(len).fill(false));
    let visited2 = new Array(len).fill(null).map(() => new Array(len).fill(false));

    const used = new Set();

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
        const dq = [];

        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                if(array[i][j] === 1) dq.push([i, j]);
            }
        }

        let mx = Infinity;
        let my = Infinity;

        for(const [x, y] of dq) {
            mx = Math.min(mx, x);
            my = Math.min(my, y);
        }

        for(let i = 0; i < dq.length; i++) {
            dq[i][0] -= mx;
            dq[i][1] -= my;
        }

        const temp = new Array(N).fill(null).map(() => new Array(N).fill(0));
        
        for(const [x, y] of dq) {
            temp[x][y] = 1;
        }

        return temp;
    }


    function bfs(i, j, map, visited, value) {
        const q = [[i, j]];
        const dq = [[i, j]];
        visited[i][j] = true;

        while(q.length > 0) {
            const [x, y] = q.shift();
            for(const [dx, dy] of direction) {
                const nx = x + dx;
                const ny = y + dy;
                if(nx < 0 || nx >= map.length || ny < 0 || ny >= map.length) continue;
                if(visited[nx][ny] || map[nx][ny] !== value) continue;
                q.push([nx, ny]);
                dq.push([nx, ny]);
                visited[nx][ny] = true;               
            } 
        }

        let mx = Infinity;
        let my = Infinity;
        
        for(const [x, y] of dq) {
            mx = Math.min(mx, x);
            my = Math.min(my, y);
        }

        for(let i = 0; i < dq.length; i++) {
            dq[i][0] -= mx;
            dq[i][1] -= my;
        }

        const temp = new Array(map.length).fill(null).map(() => new Array(map.length).fill(0));

        for(const [x, y] of dq) {
            temp[x][y] = 1;
        }

        return temp;
    }

    function isSame(empty, block) {
        for(let i = 0, len = empty.length; i < len; i++) {
            for(let j = 0; j < len; j++) {
                if(empty[i][j] !== block[i][j]) return false;
            }
        }
        return true;
    }

    function counted_block(array) {
        return array.reduce((a, f) => {
            f.forEach(v => {
                if(v === 1) a += 1;
            })
            return a;
        }, 0);
    }

    function remove(i, j) {
        const q = [[i, j]];
        const visited = new Array(table.length).fill(null).map(() => new Array(table.length).fill(false));
        visited[i][j] = true;
        table[i][j] = 0;
        while(q.length > 0) {
            const [x, y] = q.shift();
            for(const [dx, dy] of direction) {
                const nx = x + dx;
                const ny = y + dy;
                if(nx < 0 || nx >= table.length || ny < 0 || ny >= table.length) continue;
                if(visited[nx][ny] || table[nx][ny] === 0) continue;
                table[nx][ny] = 0;
                visited[nx][ny] = true;
                q.push([nx, ny]);
            }
        }
    }
    
    let answer = 0;

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(game_board[i][j] === 0 && !visited[i][j]) {
                const empty = bfs(i, j, game_board, visited, 0);
                visited2 = new Array(len).fill(null).map(() => new Array(len).fill(false));
                for(let x = 0; x < len; x++) {
                    for(let y = 0; y < len; y++) {
                        if(table[x][y] === 1 && !visited2[x][y]) {
                            let block = bfs(x, y, table, visited2, 1);
                            for(let k = 0; k < 4; k++) {
                                if(isSame(empty, block) && !used.has(empty)) {
                                    answer += counted_block(empty);
                                    used.add(empty);
                                    remove(x, y);
                                    break;
                                } else {
                                    block = rebase(rotate(block));
                                }
                            }
                        }
                    }
                }               

            }            
        }
    }
    return answer;
}

console.log(solution(
    [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]],
    [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]
))
console.log(solution(
    [[0,0,0],[1,1,0],[1,1,1]],
    [[1,1,1],[1,0,0],[0,0,0]]
))