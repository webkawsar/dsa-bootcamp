// Difficulty level => Medium

// https://leetcode.com/problems/find-all-duplicates-in-an-array/



// time complexity => O(n)
// space complexity => 
function findDuplicates(nums) {

    const hashTable = {};
    const arr  = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(hashTable[element]) {
            arr.push(element);
        }
        hashTable[element] = (hashTable[element] || 0) + 1;
    }

    return arr;
}

console.log(findDuplicates([4,3,2,7,8,2,3,1])) // [2, 3]
// console.log(findDuplicates([1,1,2])) // [1]
// console.log(findDuplicates([1])) // []










