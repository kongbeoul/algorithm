function solution(n, edge) {
  const map = Array.from({ length: n + 1 }).map(() => []);
  const visited = Array.from({ length: n + 1 }).map(() => false);
  const dist = Array.from({ length: n + 1 }).map(() => Infinity);

  edge.forEach(([start, end]) => {
    map[start] = (map[start] || []).concat({ start, end, cost: 1 });
    map[end] = (map[end] || []).concat({ start: end, end: start, cost: 1 });
  })
  
  map.forEach(m => m.sort((a, b) => a.end - b.end ));

  const queue = [...map[1]];

  dist[1] = 0;
  visited[1] = true;

  while(queue.length > 0) {
    const { start, end, cost } = queue.shift();
    if(visited[end]) continue;
    visited[end] = true;
    dist[end] = dist[start] + cost;
    queue.push(...map[end]);
  }

  const max = Math.max(...dist.slice(1));
  
  return dist.slice(1).filter(d => d === max).length;

}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	))