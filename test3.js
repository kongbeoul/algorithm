const total = 3000000;
const N = 26;
const step = 1000;

const money = [1000, 2000, 3000, 5000, 10000];

for(let i = 0; i < money.length; i++) {
    let sum = money[i];
    for(let j = 0; j < money.length; j++) {
        for(let k = 2; k <= N; k++) {
            sum += (money[j] * k);
        }
        console.log(`시작금액: ${money[i]}, 증액: ${money[j]}, 총액: ${sum.toLocaleString()}`)
    }
}
