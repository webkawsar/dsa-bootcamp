


// O(3n) => O(n)
function isAnagram(s, t) {

    if(s.length !== t.length) return false;

    const hashTableA = {};
    const hashTableB = {};

    for (let i = 0; i < s.length; i++) {

        const element = s[i];
        hashTableA[element] = (hashTableA[element] || 0) + 1
        
    }

    for (let i = 0; i < t.length; i++) {

        const element = t[i];
        hashTableB[element] = (hashTableB[element] || 0) + 1
        
    }

    for (const key in hashTableA) {
        
        if(hashTableA[key] === hashTableB[key]) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
// console.log(isAnagram('a', 'ab'));
console.log(isAnagram('anagtam', 'nbgbram'));





