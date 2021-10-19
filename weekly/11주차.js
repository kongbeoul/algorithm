// 참고: https://blog.naver.com/tngus1140/222540861909

function solution(rectangle, characterX, characterY, itemX, itemY) {
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const map = new Array(101).fill(0).map(() => new Array(101).fill(0));
  const dist = new Array(101).fill(0).map(() => new Array(101).fill(0));
  const distance = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  let answer = 0;

  for(let [x1, y1, x2, y2] of rectangle) {
    x1 *= 2;
    y1 *= 2;
    x2 *= 2;
    y2 *= 2;

    for(let i = x1 + 1; i <= x2 - 1; i++) {
      for(let j = y1 + 1; j <= y2 - 1; j++) {
        map[j][i] = -1;
      }
    }

    for(let i = x1; i <= x2; i++) {
      if(map[y1][i] !== -1) map[y1][i]++;
      if(map[y2][i] !== -1) map[y2][i]++;
    }

    for(let j = y1 + 1; j <= y2 - 1; j++) {
      if(map[j][x1] !== -1) map[j][x1]++;
      if(map[j][x2] !== -1) map[j][x2]++;
    }
  }

  for(let i = 0; i < 101; i++) {
    for(let j = 0; j < 101; j++) {
      dist[i][j] = Infinity;
    }
  }

  function bfs(x, y, cost) {
    const queue = [[x, y, cost]];
    while(queue.length > 0) {
      const [x, y, cost] = queue.shift();

      if(x === itemX && y === itemY) {
        answer = Math.floor(cost / 2);
        return;
      }

      for(const [dx, dy] of distance) {
        const nx = x + dx;
        const ny = y + dy;
        if(nx < 0 || nx >= 101 || ny < 0 || ny >= 101) continue;

        if(map[ny][nx] > 0) {
          if(dist[ny][nx] <= cost + 1) continue;
          dist[ny][nx] = cost + 1;
          queue.push([nx, ny, cost + 1])
        }
      }
    }
  }
  bfs(characterX, characterY, 0);
  return answer;
}

console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8))
console.log(solution([[2, 1, 3, 9], [1, 6, 10, 8], [7, 2, 9, 10], [4, 3, 11, 4]], 3, 6, 9, 8))