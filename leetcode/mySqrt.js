/**
 * @param {number} x
 * @return {number}
 * 
 * 참고 URL: https://velog.io/@seungsang00/JavaScript-%EB%B0%94%EB%B9%8C%EB%A1%9C%EB%8B%88%EC%95%84-%EB%B0%A9%EB%B2%95%EC%9C%BC%EB%A1%9C-%EC%A0%9C%EA%B3%B1%EA%B7%BC-%EA%B5%AC%ED%95%98%EA%B8%B0
 */

// 바빌로니아
// var mySqrt = function(x) {
//     let approx = 1;
//     while(approx * approx !== x) {
//         if(Number(approx * approx).toFixed(2) == x) break;
//         approx = (approx + (x / approx)) / 2;
//     }
//     return parseInt(approx);
// };


// 이진탐색
var mySqrt = function(x) {
    let start = 0,
        end = x,
        mid = (start + end) / 2;

    while(parseInt(mid * mid) !== x) {
        if(parseInt(mid * mid) > x) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = (start + end) / 2;

        if(parseInt(mid * mid) === x) break;
    }
    return parseInt(mid);
}

console.log(mySqrt(2147395599))