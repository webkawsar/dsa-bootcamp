


// Bubble Sort
// Move the largest element to he end

// Time Complexity => O(n^2)
// Space Complexity => o(n)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - i - 1; j++) {

            // console.log(arr, arr[j], arr[j+1]);

            if(arr[j] > arr[j + 1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swap = true;
                
            }
        }

        if(!swap) break;
    }

    return arr;
}

// console.log(bubbleSort([10, 1, -2, 2, 5, 3]));
console.log(bubbleSort([1, 10, 2, 20, 6, 30, 9]));