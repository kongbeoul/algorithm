function solution(numbers) {
    function permutation(arr, selectNum) {
        let result = [];
        if (selectNum === 1) return arr.map((v) => [v]);
      
        arr.forEach((v, idx, arr) => {
          const fixer = v;
          const restArr = arr.filter((_, index) => index !== idx);
          const permuationArr = permutation(restArr, selectNum - 1);
          const combineFixer = permuationArr.map((v) => [fixer, ...v]);
          result.push(...combineFixer);
        });
        return result;
    }
    
    const answer = new Set();

    for(let i = 1; i <= numbers.length; i++) {
        const map = permutation(numbers.split(""), i).map(v => Number(v.join('')));
        for(const n of map) {
            if(n < 2) continue;
            let flag = true;
            for(let j = 2; j <= Math.sqrt(n); j++) {
                if(n % j === 0) {
                    flag = false;
                    break;
                }
            }
            if(flag) answer.add(n);
        }       
    }

    return answer.size;

}

console.log(solution("17"));
console.log(solution("011"));