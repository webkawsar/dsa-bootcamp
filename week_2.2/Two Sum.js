

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// O(n^2)
function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        const element = nums[i];
        for (let j = 1; j < nums.length; j++) {

            const element2 = nums[j];
            if(element + element2 === target){
                return [i, j]
            }

        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))



