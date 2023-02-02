// Difficulty Level => Easy
// https://leetcode.com/problems/power-of-two/


// approach
// console.log(16 % 2)
// console.log(8 % 2)
// console.log(4 % 2)
// console.log(2 % 2)
// console.log(1 % 2)

// console.log(20 % 2);
// console.log(10 % 2);
// console.log(5 % 2);


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






// solve using bitwise operator technic
function isPowerOfTwo2(n) {
    if(n < 1) return false;

    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo2(1)); // true
console.log(isPowerOfTwo2(16)); // true
console.log(isPowerOfTwo2(3)); // false

console.log(2 & 1);
console.log(4 & 3);
console.log(8 & 7);
console.log(16 & 15);
console.log(32 & 31);




function isPowerOfTwo3(n) {
    let x = 0;
    while (2**x < n) {
        x++;
    }
    return 2**x === n;
}

console.log(isPowerOfTwo3(1)); // true
console.log(isPowerOfTwo3(16)); // true
console.log(isPowerOfTwo3(3)); // false

console.log(2**4);
console.log(2**8);





