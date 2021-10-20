// 파라메트릭 서치
// 참고: https://marades.tistory.com/7

function solution(stones, k) {
  let left = 0;
  let right = Number.MAX_SAFE_INTEGER;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    for(const stone of stones) {
      if(stone < mid) {
        count++;
      } else {
        count = 0;
      }
      
      if(count >= k) break;
    }

    if(count >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
  
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3))