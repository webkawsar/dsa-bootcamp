// Difficulty level => Easy

// https://leetcode.com/problems/contains-duplicate/

// time complexity => O(n)
function containsDuplicate(nums) {

    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(hashTable[element]) return true;
        hashTable[element] = (hashTable[element] || 0) + 1
    }

    return false;
}

// console.log(containsDuplicate([1,2,3,1])) // true
// console.log(containsDuplicate([1,2,3,4])) // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true




