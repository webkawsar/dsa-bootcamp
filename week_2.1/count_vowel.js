

// O(n)
function countVowel(str) {

    const modifiedStr = str.toLowerCase();
    const hashMap = {a: 1, e: 1, i: 1, o: 1, u: 1};
    let count = 0;

    for(char of modifiedStr) {

        if(hashMap[char]) {
            count++
        }
    }

    return count;
}

console.log(countVowel('communicate'));