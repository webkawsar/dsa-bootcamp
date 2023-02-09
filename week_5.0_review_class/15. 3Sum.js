// Difficulty Level => Medium
// https://leetcode.com/problems/3sum/


const threeSum = function(nums) {
    nums.sort((a, b) => a-b);
    let results = [];
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        if(i > 0 && nums[i] === nums[i-1]) continue;

        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];
            if(total === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                while(left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
                right--;
            } else if(total > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return results;
};


// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-2,0,0,2,2])) // [[-2,0,2]]
// console.log(threeSum([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0])) 
// Expected [[-5,1,4],[-3,-1,4],[-3,0,3],[-2,-1,3],[-2,1,1],[-1,0,1],[0,0,0]]









const threeSum2 = function(nums) {
    
    let obj={}
    nums=nums.sort((a,b)=>a-b)
    // console.log(nums)
    for(let start=0;start<nums.length;start++){
        let right=nums.length-1
        let left=start+1
        while(left<right){
            if(nums[left]+nums[right]+nums[start]==0){
                // console.log(start,left,right)
                // arr.push([nums[start],nums[left],nums[right]])
                obj[[nums[start],nums[left],nums[right]]]=[nums[start],nums[left],nums[right]]
                left++
                right--
            }else if(nums[left]+nums[right]+nums[start]>0){
                right--
            }else if(nums[left]+nums[right]+nums[start]<0){
                left++
            }
        }
    }
     return (Object.values(obj))
};


// console.log(threeSum2([-1,0,1,2,-1,-4]))
console.log(threeSum2([-2,0,0,2,2])) // [[-2,0,2]]
// console.log(threeSum2([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0])) 
// Expected [[-5,1,4],[-3,-1,4],[-3,0,3],[-2,-1,3],[-2,1,1],[-1,0,1],[0,0,0]]




const threeSum3 = function(nums) {
    
    const ans = [], n = nums.length;
    
    // To handle duplicates, we need 2 things
    // 1. Sort the array -> O(nlogn)   
    nums.sort();
    // 2. Use a set to check duplicates 
    const set = new Set();
    
    for(let i=0; i<n; i++) {
        
        const map = new Map();
        
        for(let j=i+1; j<n; j++) {
            
            if (map.has(-nums[i]-nums[j]) && !set.has(`${[nums[i],-nums[i]-nums[j],nums[j]]}`)) {
                ans.push([nums[i],-nums[i]-nums[j],nums[j]]);
                set.add(`${[nums[i],-nums[i]-nums[j],nums[j]]}`);
            }
            
            map.set(nums[j]);
        }
    }
    
    return ans;
};


// console.log(threeSum3([-1,0,1,2,-1,-4]))
console.log(threeSum3([-2,0,0,2,2])) // [[-2,0,2]]
// console.log(threeSum3([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0])) 
// Expected [[-5,1,4],[-3,-1,4],[-3,0,3],[-2,-1,3],[-2,1,1],[-1,0,1],[0,0,0]]








var threeSum = function(nums) {
    const result = [];
    
    // use two pointers solution from sorted two sum problem
    function twoSum(i, nums) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                // add valid combo to our res
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    // skip over duplicates from left
                    left += 1;
                }
                while (nums[right] === nums[right - 1]) {
                    // skip over duplicates from right
                    right -= 1;
                }
                // move onto next numbers
                left += 1;
                right -= 1;
            } else if (sum > 0) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }
    
    // sort incoming array
    const sortedNums = nums.sort((a, b) => a - b);
    
    // skip last two bc we have the two sum helper to go over those
    for (let i = 0; i < sortedNums.length - 2; i += 1) {
        // skip over duplicates here as well
        // we will start at 0 but start checking duplicates once 
        // we reach index 1 since we are looking behind 
        if (i === 0 || sortedNums[i - 1] !== sortedNums[i]) {
            twoSum(i, sortedNums, result);
        }
    }
    
    return result;
};





var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        let cursor1 = i + 1;
        let cursor2 = nums.length - 1;
        const newTarget = -nums[i];
        
        while (cursor1 < cursor2) {
            if (output.length && output[output.length - 1][0] === nums[i] && output[output.length - 1][1] === nums[cursor1] && output[output.length - 1][2] === nums[cursor2]) {
                cursor1++;
                cursor2--;
                continue;
            }
            if (nums[cursor1] + nums[cursor2] === newTarget) {
                const value = [nums[i], nums[cursor1], nums[cursor2]];
                output.push(value);
                cursor1++;
                cursor2--;
            } else if (nums[cursor1] + nums[cursor2] > newTarget)  {
                cursor2--;
            } else {
                cursor1++;
            }
        }
        while(nums[i+1] === nums[i]) i++;
    }

    return output;
};



