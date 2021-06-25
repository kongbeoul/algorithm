/**
 * 주어진 거스름 돈으로 만들 수 있는 모든 거스름 돈의 경우의 수를 구하고
 * 정렬을 한 후 1부터 하나씩 증가하면서 없는 금액을 발견할 시 그 값이
 * 만들 수 없는 금액 중 최소값
 */

function solution(N) {
  N = N.split(" ").map(v => +v).sort();
  const temp = new Set();
  
  for(let i = 0, len = N.length; i < len; i++) {
    for(let j = i + 1; j <= len; j++) {
      let sum = 0;
      for(let k = i + 1; k < j; k++) {
        sum += N[k];
      }
      temp.add(N[i] + sum);
    }
  }

  let i = 1;

  while(true) {
    if(!temp.has(i)) {
      console.log(i);
      break;
    }
    i++;
  }
}

solution("3 2 1 1 9");