



// Input: nums = [1,1,1], k = 2
// Output: 2

// array [1, 1, 1]
// [1] [1] [1]
// [1, 1]
// [1, 1, 1]


// array [1, 2, 3]
// [1] [2] [3]
// [1, 2] [2, 3]
// [1, 2, 3]

// const mainArray = [ [1], [2], [3]];

function subArraySum(nums, k) {

    let count = 0;
    let sum = 0;
    let hashTable = {0: 1};

    for (let i = 0; i < nums.length; i++) {
      
        sum += nums[i];
        const wantedValue = sum - k;

        console.log(sum)
        console.log(wantedValue);

        if(wantedValue in hashTable) {
            count += hashTable[wantedValue]
        }

        hashTable[sum] = (hashTable[sum] || 0) + 1
        
    }

    console.log(hashTable);
    return count;
}
// console.log(subArraySum([1, 1, 1], 2))
// console.log(subArraySum([1, 2, 3], 3))
console.log(subArraySum([1, -1, 0], 0))


