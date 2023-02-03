

// Insertion Sort
// prothome arr er first index ke current sorted value dore loop kore kore arr er second element theke ekta ekta kore value niye asbe and left er protita element er sathe compare kore insert kore dibe


function insertionSort(arr) {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {

        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {

            console.log(j);
            arr[j+1] = arr[j]          ;
        }

        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([10, 1, -2, 2, 5, 3]));
// console.log(insertionSort([1, 10, 2, 20, 6, 30, 9]));
