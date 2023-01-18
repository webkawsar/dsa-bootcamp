// Difficulty Level => Medium
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/




// brute force approach
// time complexity => O(n)
function strStr(haystack, needle) {

    // for (let i = 0; i < haystack.length; i++) {
    //     const element = haystack[i];
    //     console.log(element)

    //     for (let j = 0; j < needle.length; j++) {
    //         const element2 = needle[j];
    //         console.log(element2);

    //         // if(element === element2)
    //     }
    // }

}

// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("leetcode", "leeto")); // -1






// aabaaab
function buildPrefixTable(s) {
    let table = [0];
    let i = 1;
    let j = 0;

    while (i < s.length) {
        if(s[i] === s[j]) {
            j++;
            table[i] = j;
            i++;
        } else if(j > 0) {
            j = table[j-1]
        } else  {
            table[i] = 0;
            i++;
        }
    }

    return table;
}

function strStr2(haystack, needle) {
    if(needle.length === '') return 0;

    const prefixTable = buildPrefixTable(needle);
    let i = 0;
    let j = 0;
    while (i < haystack.length && j < needle.length) {
        
        if(haystack[i] === needle[j]) {
            i++;
            j++;
        } else if(j > 0) {
            j = prefixTable[j-1];
        } else {
            i++;
        }
    }

    return j === needle.length ? i - j : -1; 
}

// console.log(strStr2("sadbutsad", "sad")); // 0
// console.log(strStr2("leetcode", "leeto")); // -1
console.log(strStr2("aabaabaaab", "aabaaab")); // 3

