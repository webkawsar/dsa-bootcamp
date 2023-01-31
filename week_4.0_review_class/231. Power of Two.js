// Difficulty Level => Easy
// https://leetcode.com/problems/power-of-two/


console.log(16 % 2)
console.log(8 % 2)
console.log(4 % 2)
console.log(2 % 2)
console.log(1 % 2)



function isPowerOfTwo(n) {
    if(n < 1) return false;

    let dividedNum = n;
    while (dividedNum !== 1) {
        if(dividedNum % 2 !== 0) {
            return false;
        }
        dividedNum = dividedNum / 2;        
    }

    return true;

}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false




