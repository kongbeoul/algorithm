function solution(N, M) {
  M = M.split(" ");
  
  const MAX_VALUE = Math.max.apply(null, M);
  let result = 0, MAX = -Infinity, count = 0;

  for(let i = 1; i <= MAX_VALUE; i++) {
    for(let j = 0; j < N; j++) {
      if(M[j] <= i) {
        count += 1;
        if(count == i) {
          result += 1;
          count = 0;
        }
      }
    }
    if(result > MAX) {
      MAX = result;
    }
    result = 0;
  }
  
  console.log(MAX);
}

solution(5, "2 3 1 2 2");