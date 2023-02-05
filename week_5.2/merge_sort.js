

/*
i
[1, 3, 5] [2, 4, 6, 9, 11]
           j

[1, 2, 3, 4, 5, 6, 9, 11]

*/

// time complexity O(nlogn)
// space complexity O(n)
function merge(arr1, arr2) {

    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// console.log(merge([1, 3, 5], [2, 4, 6, 9, 11]))


function mergeSort(arr) {
    //console.log(arr) // [1, 3, 5, 9, 7] // [1, 3] 
    // return [1] // [3]

    let mid = Math.floor(arr.length / 2);
    if(arr.length <= 1) return arr;
    // console.log(mid) 2 // 1

    let left = mergeSort(arr.slice(0, mid)); // [1, 3] // [1]
    // [1]
    // console.log(left)

    let right = mergeSort(arr.slice(mid)); // [3]
    // [3]
    // console.log(right)


    return merge(left, right); // [1, 3]
}

console.log(mergeSort([1, 3, 5, 9, 7]));

