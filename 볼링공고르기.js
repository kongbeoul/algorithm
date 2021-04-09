/**
 * 서로 다른 무게의 공을 고르는 경우의 수 구하기
 * 같은 무게의 공을 선택하는 경우를 제외하고 개수를 셈
 */

function solution(N, M) {
  M = M.split(" ").sort();

  let result = 0;

  for(let i = 0; i < N; i++) {
    for(let j = i + 1; j < N; j++) {
      if(M[i] !== M[j]) {
        result += 1;
      }
    }
  }

  return result;
}

console.log(solution(8, "1 5 4 3 2 4 5 2"))
