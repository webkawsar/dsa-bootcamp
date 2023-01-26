

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
    if(num === 0) return

    countToZero2(num - 1)
}

countToZero2(10);


