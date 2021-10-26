function solution(k, dungeons) {
  dungeons.sort((a, b) => b[0] - a[0]);
  const visited = Array.from({ length: 3}).map(() => false);

  let answer = 0;

  function dfs(result) {
    for(let i = 0; i < dungeons.length; i++) {
      const [least, consume] = dungeons[i];
      if(least > k || visited[i]) continue;
      visited[i] = true;
      k -= consume;
      dfs(result + 1);
      visited[i] = false;
      k += consume;
    }

    answer = Math.max(answer, result);
  }
  dfs(0);
  return answer;

}

console.log(solution(80, [[80,20],[50,40],[30,10]]))