/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    return (
        nums
          .sort((a, b) => {
            const priority = `${b}${a}` - (`${a}${b}`);
            console.log(`${b}${a} - ${a}${b} => ${priority}`);
            if (priority > 0) console.log(`${a} > ${b}`);
            else console.log(`${a} < ${b}`);
            return `${b}${a}` - (`${a}${b}`);
          })
          .join('')
          .replace(/^0*/, '') || '0'
      );
};

console.log(largestNumber([10, 2]))
console.log(largestNumber([3, 30, 34, 5, 9]))
console.log(largestNumber([1]))
console.log(largestNumber([10]))
console.log(largestNumber([999999998,999999997,999999999]))
