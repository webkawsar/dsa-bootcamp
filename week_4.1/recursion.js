

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




// iterative solution
function createRange(num1, num2) {
    let rangeArr = [];
    for (let i = num1; i <= num2; i++) {
        rangeArr.push(i);
    }
    console.log(rangeArr)
}
createRange(10, 20)



// impure recursive solution
function createRange2(num1, num2) {
    let rangeArr = [];
    function helper(inputNum, targetNum) {
        rangeArr.push(inputNum);

        // base case
        if(inputNum === targetNum) return targetNum;
        helper(inputNum + 1, targetNum)
    }
    helper(num1, num2);
    console.log(rangeArr)
}
createRange2(10, 20)




// pure recursive solution
function createRange3(num, targetNum, rangeArr = []) {
    rangeArr.push(num);
    // base case
    if(num === targetNum) return rangeArr;
    return createRange3(num + 1, targetNum, rangeArr);
}

console.log(createRange3(10, 20);
