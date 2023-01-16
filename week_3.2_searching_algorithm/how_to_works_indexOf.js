


// time complexity => O(n)
function indexOf(arr, searchElm) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element === searchElm) return i;
    }

    return -1;
}

console.log(indexOf([1, 3, 5, 7, 9], 7));