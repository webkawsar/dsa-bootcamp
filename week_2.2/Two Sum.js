


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// O(n^2)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3,2,4], 6))




/****************Way 2 *************/

// O()
function twoSum2(nums, target) {

    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        hashTable[nums[i]] = i
    }

    console.log(hashTable)
    
    for (const value in hashTable) {

        const firstIndex = hashTable[value];
        const remained = target > value ? target - value : value - target;

        console.log(firstIndex)
        console.log(remained);

        if(remained in hashTable) {
            const secondIndex = hashTable[remained];
            return [firstIndex, secondIndex]
        }
    }
}

// console.log(twoSum2([5, 25, 20, 8], 13));
// console.log(twoSum2([3,2,4], 6))
console.log(twoSum2([3, 3], 6))



