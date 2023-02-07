


// Bubble Sort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let swap = false;
        for(let j = 0; j < arr.length - i - 1; j++) {

            console.log(arr, arr[i], arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }

        if(!swap) break;
    }

    return arr;
}

// console.log(bubbleSort([10, 1, -2, 2, 5, 3]));
console.log(bubbleSort([1, 10, 2, 20]));