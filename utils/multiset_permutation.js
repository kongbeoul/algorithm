function multisetPermutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
  
    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const permuationArr = multisetPermutation(arr, selectNum - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
}

console.log(multisetPermutation([1, 2, 3], 2));