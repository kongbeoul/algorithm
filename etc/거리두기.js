function solution(places) {
    const answer = new Array(places.length).fill(1);

    const direction = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
    ]

    for(let i = 0; i < places.length; i++) {
        const matrix = places[i];
        const queue = [];
        const visited = new Array(5).fill(null).map(() => new Array(5).fill(false));
        for(let x = 0; x < 5; x++) {
            for(let y = 0; y < 5; y++) {
                if(matrix[x][y] === "P") {
                    visited[x][y] = true;
                    queue.push([x, y]);
                    while(queue.length > 0) {
                        const [_x, _y] = queue.shift();
                        for(const [dx, dy] of direction) {
                            const nx = _x + dx;
                            const ny = _y + dy;
                            const distance = Math.abs(nx - x) + Math.abs(ny - y);

                            if(nx >= 0 && ny >= 0 && nx < 5 && ny < 5 && distance < 3) {
                                if(matrix[nx][ny] === "X") continue;
                                
                                if(!visited[nx][ny]) {
                                    visited[nx][ny] = true;
                                    if(matrix[nx][ny] === "P") {
                                        answer[i] = 0;
                                    } else if(matrix[nx][ny] === "O") {
                                        queue.push([nx, ny])
                                    }
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

console.log(solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
]));


console.log(solution([["OOPOO", "OPOOO", "OOOOO", "OOOOO", "OOOOO"]]));
console.log(solution([["PXOOO", "OOOOO", "PXOOO", "OOOOO", "OOOPO"]]));