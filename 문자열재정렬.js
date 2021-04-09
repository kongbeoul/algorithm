/**
 * 입력받은 문자열을 ASCII 코드 값을 기준으로 오름차순 정렬하여 
 * 숫자는 숫자끼리 문자는 문자끼리 더한 후 더해진 문자열 뒤에 숫자 값을 더한 값을 리턴
 */

function solution(S) {
  S = S.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  
  let sum = 0, str = '';

  for(let i = 0; i < S.length; i++) {
    if(S[i].match(/[0-9]/)) {
      sum += +S[i];
    } else {
      str += S[i]
    }
  };
  return str + sum.toString();
}
console.log(solution('K1KA5CB7'));
console.log(solution('AJKDLSI412K4JSJ9D'));
