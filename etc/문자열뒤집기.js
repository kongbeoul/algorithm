/**
 * 문자열에서 0이 연속적으로 나오는 경우와 1이 연속적으로 나오는 경우를 
 * 체크해서 둘 중의 더 적게 나오는 경우의 숫자를 뒤집음
 */

function solution(S) {
  let count1 = 0,
      count2 = 0;

  if(S[0] == 0) {
    count1 += 1
  } else if(S[0] == 1) {
    count2 += 2;
  }

  for(let i = 1, len = S.length; i <= len; i++) {
    if(S[i] !== S[i - 1]) {
      if(S[i] == 1 && S[i - 1] == 0) {
        count2 += 1;
      } else if(S[i] == 0 && S[i - 1] == 1) {
        count1 += 1;
      }
    }
  }

  return Math.min(count1, count2);
}

console.log(solution("1001101"))