// Difficulty level => Medium
// https://leetcode.com/problems/subarray-sum-equals-k/


// Input: nums = [1,1,1], k = 2
// Output: 2

// array [1, 1, 1]
// [1] [1] [1]
// [1, 1]
// [1, 1, 1]

// [1] [1]
// [1] [1]


// array [1, 2, 3]
// [1] [2] [3]
// [1, 2] [2, 3]
// [1, 2, 3]

// [1] [2]
// [3]



function subArraySum(nums, k) {

    let count = 0;
    let sum = 0;
    let hashTable = {0: 1};

    for (let i = 0; i < nums.length; i++) {
      
        sum += nums[i];
        const wantedValue = sum - k;

        if(wantedValue in hashTable) {
            count += hashTable[wantedValue]
        }

        hashTable[sum] = (hashTable[sum] || 0) + 1
        
    }

    return count;
}

// console.log(subArraySum([1, -1, 0], 0)) // 3
// console.log(subArraySum([1, 1, 1], 2)) // 2
// console.log(subArraySum([1, 2, 3], 3)) // 2
// console.log(subArraySum([3, 3, 3], 3)) // 3







// array [1, 2, 3]
// [1] [2]
// [3]

function subArraySum2(nums, k) {

    let count = 0;
    let prevElement = null;
    for (let i = 0; i < nums.length; i++) {

        const element = nums[i];

        // prev + current element er soman ki na
        if((prevElement + element) === k) {
            count++;

        } else if(element === k) {

            // current element er soman ki na
            count++;
        } 

        prevElement = element;
    }

    return count;
}

console.log(subArraySum2([1, -1, 0], 0)) // 3
// console.log(subArraySum2([1, 1, 1], 2)) // 2
// console.log(subArraySum2([1, 2, 3], 3)) // 2
// console.log(subArraySum2([3, 3, 3], 3)) // 3

// [1, -1, 0]

