// Difficulty level => Easy
// https://leetcode.com/problems/reverse-string/



// time complexity => O(n)
// space complexity => O(1)

function reverseString(s) {

    // return s.reverse();
    for (let i = 0; i < s.length / 2; i++) {
        const element = s[i];
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = element;
    }
    return s;
}

// console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["m", "a", "g", "n", "a"]));








