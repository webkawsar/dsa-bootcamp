// Difficulty level => Easy
// https://leetcode.com/problems/contains-duplicate-ii/


// time complexity => O(n^2)
// nums[i] == nums[j] and abs(i - j) <= k.
function containsNearbyDuplicate(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j] && Math.abs(i-j) <= k) {
                return true;
            }
        }
    }
    return false;
}

// console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
// console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false






// Alternative way

// nums[i] == nums[j] and abs(i - j) <= k
function containsNearbyDuplicate2(nums, k) {

    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {

        const element = nums[i];
        const hashTableElm = hashTable[element];
        if(nums[hashTableElm] === element && Math.abs(i - hashTable[element]) <= k){
            return true;
        } else {
            hashTable[element] = i;
        }

    }

    return false;
}



// console.log(containsNearbyDuplicate2([1,2,3,1], 3)); // true
// console.log(containsNearbyDuplicate2([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate2([1,2,3,1,2,3], 2)); // false




//      let hashTable = [];
//     for(let i = 0; i < nums.length; i++) {
//     // first case will be undefined in hashTable & hence NAN
//         if(i - hashTable[nums[i]] <= k) {
//             return true;
//         } else {
//             hashTable[nums[i]] = [i] ;
//         }
//     }
//     return false;














