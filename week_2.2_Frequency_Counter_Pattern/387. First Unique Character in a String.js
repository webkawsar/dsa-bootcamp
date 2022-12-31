

// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

function firstUniqChar(s) {

    const hashTable = {};
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        hashTable[element] = (hashTable[element] || 0) + 1
    }

    
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(hashTable[element] === 1){
            return i;
        }
    }

    return -1;
}

// console.log(firstUniqChar('leetcode'));
// console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));







