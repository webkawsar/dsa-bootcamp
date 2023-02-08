

/*
    i
[4, 3, 2, 1]
j


    i
[3, 4, 2, 1]
j4   3

*/

// Insertion Sort
function insertionSort(arr) {
  
    let currentMin = null;
    for(let i = 1; i < arr.length; i++) {
        currentMin = arr[i];
        
        for(var j = i - 1; j >= 0 && arr[j] > currentMin; j--) {
            arr[j+1] = arr[j]
            
        }
        arr[j+1] = currentMin;
        
    }

    return arr;
}

console.log(insertionSort([4, 3, 1, 5]));
// console.log(insertionSort([10, 1, -2, 2, 5, 3]));
// console.log(insertionSort([10, 1, 2, 20, 6, 30, 9]));
