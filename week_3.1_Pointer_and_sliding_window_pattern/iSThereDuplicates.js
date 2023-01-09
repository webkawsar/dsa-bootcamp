


function iSThereDuplicates(arr) {

    let i = 0;
    while (i < arr.length) {
        if(arr[i] === arr[i + 1]) return true;
        i++;
    }

    return false;
}

// console.log(iSThereDuplicates([1, 1, 1, 2, 3, 4, 5]));
console.log(iSThereDuplicates([-1, 0, 1, 2, 3]));