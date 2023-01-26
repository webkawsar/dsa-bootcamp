

// iterative solution
function countToZero(num) {

    for (let i = num; i >= 0; i--) {
        console.log(i);
    }

}

countToZero(10);





// recursive solution
function countToZero2(num) {

    console.log(num)

    // base case
    if(num === 0) return

    countToZero2(num - 1)
}

countToZero2(10);





// iterative solution
function sumRange(num1, num2) {

    let total = 0;
    for (let i = 0; i <= num2; i++) {
        total += i;
    }

    console.log(total)
}

sumRange(1, 10);





// recursive solution
function sumRange2(num) {

    // base case
    if(num === 0) return 0;
    return num + sumRange2(num - 1);
}

console.log(sumRange2(10))