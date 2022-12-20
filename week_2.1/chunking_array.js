

// [[1, 3], [5, 7], [9]]
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

