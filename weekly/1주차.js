function solution(price, money, count) {
    for(let i = 0; i < count; i++) {
        money -= price * (i + 1);
    }
    
    if(money < 0) return money * -1;
    return 0;    
}

solution(3, 20, 4);