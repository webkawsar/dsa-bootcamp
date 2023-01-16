

// Binary search / Divide and conquer
// must be sorted
function indexOf(arr, searchElm) {

    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {

        let mid = Math.floor((low + high) / 2);
        let midValue = arr[mid];

        if(midValue === searchElm) {
            return mid;
        }

        if(midValue < searchElm) {
            low = mid + 1;
        }

        if(midValue > searchElm) {
            high = mid - 1;
        }

    }

    return -1;
}

console.log(indexOf([1, 3, 5, 7, 9], 7));



/*****
 
[1, 3, 5, 7, 9, 10]         target 7
l      m         h          m = (l + h) / 2 = 0 + 5 / 2 = 2.5 => 2


[1, 3, 5, 7, 9, 10]         target 7
          l  m   h          m = (l + h) / 2 = 3 + 5 / 2 = 4

          
[1, 3, 5, 7, 9, 10]         target 7
          l                 m = (l + h) / 2 = 3 + 3 / 2 = 3
          h
          m


**/