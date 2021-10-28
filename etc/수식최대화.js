function solution(expression) {
  const permutation = [
    [ '-', '*', '+' ],
    [ '-', '+', '*' ],
    [ '*', '-', '+' ],
    [ '*', '+', '-' ],
    [ '+', '-', '*' ],
    [ '+', '*', '-' ]
  ];

  const queue_number = expression.split(/[-\*\+]/).map(v => +v);
  const queue_opeartor = expression.match(/[-\*\+]/g);

  let answer = 0;

  for(const p of permutation) {
    const _queue_number = [...queue_number];
    const _queue_operator = [...queue_opeartor];
    for(const o of p) {
      for(let i = 0; i < _queue_operator.length; i++) {
        let sum = 0;
        if(_queue_operator[i] === o) {
          switch(o){
            case '*':
              sum = _queue_number[i] * _queue_number[i + 1];
              break;
            case '-':
              sum = _queue_number[i] - _queue_number[i + 1];
              break;
            case '+':
              sum = _queue_number[i] + _queue_number[i + 1];
              break;
          }
          _queue_number.splice(i, 2, sum);
          _queue_operator.splice(i, 1);
          i--
        }
      }
    }
    answer = Math.max(answer, Math.abs(_queue_number[0]));
  }

  return answer;
}
console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"))