

var filter = function(arr, fn) {
    
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        
        const element = arr[i];
        if(fn(element, i)) {
            filteredArr.push(element)
        }
    }

    return filteredArr;
};


let arr = [0, 10, 20, 30];
function greaterThan10(n) { 
    if(n > 10) return n;
}

console.log(filter(arr, greaterThan10))