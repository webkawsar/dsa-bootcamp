





// Maximum Subarray(Fundamentals Sliding window problem solving )
function maxSubArraySum(arr, num) {

    let max = 0;
    for (let i = 0; i < num; i++) {
        max += arr[i];   
    }

    let sum = max;
    for (let j = num; j < arr.length; j++) {
        sum = (sum - arr[j-num]) + arr[j];
        max = Math.max(max, sum);
    }

    return max;
}

// console.log(maxSubArraySum([1, 3, 5, 7, 9, 10, 4, 6, 7, 8], 2)); // 19
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13




/******** calculation ******/
// [1, 3, 5, 7, 9, 10]
// 1 + 3 = 4
// 4 - 1 + 5 = 8
// 8 - 3 + 7 = 12
// 12 - 5 + 9 = 16
// 16 - 7 + 10 = 19

/******** calculation ******/
// [1, 2, 5, 2, 8, 1, 5]
// 1 + 2 = 3
// 3 - 1 + 5 = 7
// 7 - 2 + 2 = 7
// 7 - 5 + 8 = 10
// 10 - 2 + 1 = 9
// 9 - 8 + 5 = 6
