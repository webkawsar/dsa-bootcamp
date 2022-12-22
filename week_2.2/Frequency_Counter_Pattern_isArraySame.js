

// time complexity => O(n * m)
// function isArraySame(arr1, arr2) {

//     if(arr1.length !== arr2.length) return false;

//     for (const elm of arr1) {

//         const index = arr2.indexOf(elm);
//         if(index === -1) return false;

//         arr2.splice(index, 1)
//     }

//     return true;
// }

// console.log(isArraySame([1, 2, 3, 4, 6], [1, 2, 3, 4, 5]));





// time complexity => O(n + n + n) => O(n)
function isArraySame(arr1, arr2) {

    if(arr1.length !== arr2.length) return false;

    const hashTable1 = {}
    for (const elm of arr1) {
        hashTable1[elm] = (hashTable1[elm] || 0) + 1
    }

    const hashTable2 = {}
    for (const elm of arr2) {
        hashTable2[elm] = (hashTable2[elm] || 0) + 1
    }

    for (const elm in hashTable1) {
        if(!elm in hashTable2 || hashTable1[elm] !== hashTable2[elm]) return false;
    }

    return true;
}

console.log(isArraySame([1, 2, 3, 4, 6], [1, 2, 3, 4, 6]));




