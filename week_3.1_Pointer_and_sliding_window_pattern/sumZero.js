





// Multiple Pointer
// SumZero (Fundamentals pointer Problem Solving)

function sumZero(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]]
        }

        if(sum > 0) {
            right--;
        }

        if(sum < 0) {
            left++;
        }
    }
    return undefined;
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 2, 3]));
// console.log(sumZero([1, 2, 3]));