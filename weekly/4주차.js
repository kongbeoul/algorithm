function solution(table, languages, preference) {
    const hash = table.reduce((a, c) => {
        const [v, ...rest] = c.split(" ");
        a[v] = rest.reduce((_a, _c, i, l) => {
            _a[_c] = l.length - i;
            return _a;
        }, {});
        return a;
    }, {});

    const map = Object.keys(hash).map(key => {
        let sum = 0;
        languages.forEach((_v, _i) => {
            const score = hash[key][_v] || 0;
            const prefer = preference[_i];
            sum += score * prefer
        });
        return {
            key,
            total: sum
        }
    }).sort((a, b) => {
        if(a.total !== b.total) {
            return b.total - a.total
        } else if(a.total === b.total) {
            return a.key.charCodeAt(0) - b.key.charCodeAt(0);
        }
    });

    return map[0].key;
}

console.log(solution(
    [
        "SI JAVA JAVASCRIPT SQL PYTHON C#", 
        "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", 
        "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", 
        "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", 
        "GAME C++ C# JAVASCRIPT C JAVA"
    ],
    ["PYTHON", "C++", "SQL"],
    [7, 5, 5]
))

console.log(solution(
    [
        "SI JAVA JAVASCRIPT SQL PYTHON C#", 
        "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", 
        "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", 
        "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", 
        "GAME C++ C# JAVASCRIPT C JAVA"
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
))