


function reverseInt(int) {

    let reversedNum = int.toString().split('').reverse().join('');

    if(reversedNum.endsWith('-')) {
        reversedNum = '-' + reversedNum.slice(0, reversedNum.length - 1)
    }

    return reversedNum = parseInt(reversedNum);
    
}

console.log(reverseInt(-15))


