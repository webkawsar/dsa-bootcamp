


/*
    i
p
[5, 4, 9, 2, 1, 3] 
s

jodi i er value p er value theke chuto hoy tahole s er index ek barbe er pore i er value s diye replace hobe ar s er value i diye replace hobe
ar finally s er value diye p replace hobe ar p er value diye s replace hobe


p = Pivot
s = Swap Index
i = loop er index


    i
p
[5, 6, 9, 2, 1, 3] 
S


                  i
p
[3, 2, 1, 5, 9, 6] 
          S


*/

// Divide and conquer method follow kore

// time complexity => O(nlogn)
// space complexity => O(logn)
// random element e quick sort valo kaj kore, almost sorted array te quick sort valo kaj kore na tokhon time complexity O(n^2) hoye jay
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
    let swapIndex = pivotIndex;
    for(let i = pivotIndex + 1; i <= endIndex; i++) {
        if(arr[i] < arr[pivotIndex]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, pivotIndex, swapIndex);
    return swapIndex;
}
// console.log(pivot([5, 6, 9, 2, 1, 3] ))

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([5, 6, 9, 2, 1, 3]))