// Difficulty Level => Easy
// https://leetcode.com/problems/valid-palindrome/



// O(n)
function isPalindrome(s) {

    const normalizeStr = s.replace(/[\W_]/g, '').toLowerCase();
    let str = '';
    for (let i = 0; i < normalizeStr.length; i++) {
        const element = normalizeStr[i];
        str = element + str;
    }

    if(normalizeStr === str) return true;
    return false;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome(" ")); // true








// alternative way
function isPalindrome2(s) {

    const normalizeStr = s.replace(/[\W_]/g, '').toLowerCase();
    let left = 0;
    let right = normalizeStr.length - 1;
    while(left < normalizeStr.length) {
        if(normalizeStr[left] !== normalizeStr[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome2("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome2("race a car")); // false
// console.log(isPalindrome2(" ")); // true