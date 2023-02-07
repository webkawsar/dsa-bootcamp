


// Selection Sort
// Smallest element will move to the first

// Time Complexity => o(n^2)
// Space Complexity => o(1)
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j
            }
        }

        if(i !== lowest) {
            let temp = arr[lowest];
            arr[lowest] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

// console.log(selectionSort([10, 1, -2, 2, 5, 3]));
console.log(selectionSort([10, 1, 2, 20, 6, 30, 9]));
