// Difficulty Level => Easy
// https://leetcode.com/problems/search-insert-position/



// O(log n)
function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {

        let mid = Math.floor((low + high) / 2);
        let midValue = nums[mid];

        if(midValue === target) {
            return mid;
        }

        if(midValue < target) {
            low = mid + 1;
        }

        if(midValue > target) {
            high = mid - 1;
        }

    }

    return low;
};

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4







