/**
 * 중간 값을 기준으로 왼쪽 합과 오른쪽 합을 구한 후 비교 
 * 왼쪽 합과 오른쪽 합이 같으면 'LUCKY' 다르면 'READY'
 */

function solution(N) {
  const MID = parseInt(N.length / 2);
  
  let leftSum = 0,
      rightSum = 0;
  
  let i = 0;

  while(i < MID) {
    leftSum += Number(N[i]);
    rightSum += Number(N[i + MID]); 

    i++;
  }

  if(leftSum == rightSum) {
    return "LUCKY";
  } else {
    return "READY"
  }
}

console.log(solution('123402'));