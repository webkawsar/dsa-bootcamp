

// time complexity => O(n + n + n) => O(n)

function sameFrequency(int1, int2) {

    const str1 = int1.toString();
    const str2 = int2.toString();
    
    const hashTable1 = {};
    const hashTable2 = {};

    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        hashTable1[element] = (hashTable1[element] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const element = str2[i];
        hashTable2[element] = (hashTable2[element] || 0) + 1;
    }

    for (const key in hashTable1) {
        if(hashTable2[key] === hashTable1[key]) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}


console.log(sameFrequency(188, 821));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

 


