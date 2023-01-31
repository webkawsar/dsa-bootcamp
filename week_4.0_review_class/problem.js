

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



// https://www.youtube.com/watch?v=EmtnQImW-y4
// https://www.youtube.com/watch?v=ahG_AWKE5bk
// https://www.youtube.com/watch?v=dTIEkI3MjtI
// https://www.youtube.com/watch?v=JUY9tDK7qC4



// helper method recursion
function collectStrings(obj) {
    let stringsArr = [];

    function gatherString(o) {
        for(let key in o) {
            if(typeof(o[key]) === 'object') {
                console.log(o[key])
                // some action
                return gatherString(o[key])
            } else {
                stringsArr.push(o[key]);
            }
        }
    }

    gatherString(obj);
    return stringsArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));

