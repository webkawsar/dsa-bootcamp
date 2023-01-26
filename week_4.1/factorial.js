
// 5! = 5 * 4 * 3 * 2 * 1
// iterative solution
function factorial(num) {

    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
        console.log(i)
    }

    console.log(total)
}

factorial(5);



// recursive solution
function factorial2(num) {
    // base case
    if(num === 0) return 1;
    return num * factorial2(num - 1);
}

console.log(factorial2(5))




