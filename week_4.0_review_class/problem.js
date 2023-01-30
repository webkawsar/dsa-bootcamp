

// recursion related problem

function flatten(arr) {
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];
        if(Array.isArray(element)) {

            // some action
            newArr = newArr.concat(flatten(element));

        } else {

            newArr.push(element);
        }
    }
    
    return newArr;
}

// console.log(flatten([1, 3, 5, [7, 9, [13, 15, [17]]]]));
console.log(flatten([1, 3, 5, [7, 9]]));
// console.log(flatten([1, [3, 5], [7, 9, [13, 15, [17]]]]));

// https://www.youtube.com/watch?v=3WIIxyHYHm8
// https://www.youtube.com/watch?v=78DsgMursgk
// https://www.youtube.com/watch?v=EmtnQImW-y4
// https://www.youtube.com/watch?v=ahG_AWKE5bk
// https://www.youtube.com/watch?v=dTIEkI3MjtI
// https://www.youtube.com/watch?v=JUY9tDK7qC4