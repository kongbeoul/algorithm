var romanToInt = function(s) {
    const hash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "A": 4,
        "B": 9,
        "E": 40,
        "F": 90,
        "G": 400,
        "H": 900,
    }

    s = s.replace("IV", "A");
    s = s.replace("IX", "B");
    s = s.replace("XL", "E");
    s = s.replace("XC", "F");
    s = s.replace("CD", "G");
    s = s.replace("CM", "H");

    return s.split("").reduce((a, b) => {
        return a += hash[b];
    }, 0);
}

console.log(romanToInt("MCMXCIV"))