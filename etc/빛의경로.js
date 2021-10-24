function solution(grid) {
  const N = grid.length;
  const M = grid[0].length;
  const answer = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function changeDir(type, dir) {
    switch(type) {
      case 'L':
        return (4 + (dir - 1)) % 4;
      case 'R':
        return (dir + 1) % 4;
      default:
        return dir;
    }
  }

  function bfs(sx, sy, sdir) {
    const queue = [[sx, sy, sdir, 0]];
    while(queue.length > 0) {
      let [x, y, dir, result] = queue.shift();
      x = x < 0 ? N - 1 : x >= N ? 0 : x;
      y = y < 0 ? M - 1 : y >= M ? 0: y;

      if(x === sx && y === sy && dir === sdir && result > 0) return result;
      visited[x][y][dir] = true;
      dir = changeDir(grid[x][y], dir);

      const nx = x + dx[dir];
      const ny = y + dy[dir];
      queue.push([nx, ny, dir, result + 1]);
    }
  }

  const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => Array.from({ length: 4 }, () => -1) ));

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
      for(let d = 0; d < 4; d++) {
        if(visited[i][j][d] === -1) {
          const count = bfs(i, j, d);
          answer.push(count);
        }
      } 
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution(["SL","LR"]))
console.log(solution(["S"]))
console.log(solution(["R","R"]))