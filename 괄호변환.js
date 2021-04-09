function checked(u) {
    let count = 0;
    for(let i = 0, len = u.length; i < len; i++) {
        if(u[i] == "(") {
            count += 1;
        } else if(u[i] == ")"){
            if(count == 0) {
                return false;
            }
            count -= 1;
        }
    }
    return true;
}

function solution(w) {
    let count = 0, pivot = 0, answer = '';
    
    if(w == "") return answer;

    for(let i = 0, len = w.length; i < len; i++) {
        if(w[i] == "(") {
            count += 1;
        } else if(w[i] == ")") {
            count -= 1;
        }

        if(count == 0) {
            pivot = i + 1;
            break;
        }
    }

    let u = w.slice(0, pivot);
    let v = w.slice(pivot);

    if(checked(u)) {
        answer = u + solution(v);
    } 
    else {
        answer += "(";
        answer += solution(v);
        answer += ")";
        u = u.slice(1, u.length - 1);
        for(let j = 0; j < u.length; j++) {
            if(u[j] == "(") {
                answer += ")";
            } else if(u[j] == ")"){
                answer += "(";
            }
        }
    }
    return answer;
}

console.log(solution("()))((()"))