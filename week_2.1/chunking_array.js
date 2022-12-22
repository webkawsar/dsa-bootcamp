


// [[1, 3], [5, 7], [9]]
// O(n)
function chunk(arr, size) {

    const chunked = [];
    for (const elm of arr) {
        
        const last = chunked[chunked.length - 1];
        if(last && last.length < size) {
            last.push(elm);
        } else {
            chunked.push([elm]);
        }
    }
    return chunked;
}

console.log(chunk([1, 3, 5, 7, 9], 3));



/*************Way 2 ****************/
// [[1, 3], [5, 7], [9]]
// O(n)
function chunk2(arr, size) {

    const chunked = [];
    
    // let i = size;
    // let start = 0;
    // const length = arr.length;
    // while (i < length) {
        

    //     console.log(i);
    //     arr.splice(i)
    //     start = i;
    //     i++
    // }


    return chunked;
}

console.log(chunk2([1, 3, 5, 7, 9, 11, 13, 15], 3));
