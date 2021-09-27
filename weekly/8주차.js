function solution(sizes) {
  sizes.forEach(s => {
    s.sort((a, b) => a - b);
  })
  const width = Math.max(...sizes.map(s => s[0]));
  const height = Math.max(...sizes.map(s => s[1]));
  return width * height;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))
