


function palindromeChecker(str) {

    const regex = /[\W]/
    const normalizeStr = str.toLowerCase().replace(regex, '');
    const reversedStr = normalizeStr.split('').reverse().join('');
    return normalizeStr === reversedStr;
}

// console.log(palindromeChecker('race car'))
console.log(palindromeChecker('race car not a palindrome'))