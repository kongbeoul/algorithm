/**
 * 0 또는 1이 아닌 경우는 항상 더하기보다 곱하기가
 * 더 크기 때문에 0 과 1이 아닌 경우만 곱하고
 * 나머지는 더해서 결과값을 만든다
 */

function solution(S) {
  var result = 1;
  for(var i = 0, len = S.length; i < len; i++) {
    if(parseInt(S[i]) == 0 || parseInt(S[i]) == 1) {
      result += parseInt(S[i])
    } else {
      result *= parseInt(S[i])
    }
  }

  return result;
}

console.log(solution("02984"));
console.log(solution("567"));