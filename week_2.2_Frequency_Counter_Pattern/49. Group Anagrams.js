


// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = [""]
// Output: [[""]]

// Input: strs = ["a"]
// Output: [["a"]]


// time complexity O(n^2)
function groupAnagrams(strs) {

    const hashTable = {};
    for (let i = 0; i < strs.length; i++) {

        const element = strs[i];
        const sorted = element.split('').sort().join('')
        
        if(hashTable[sorted]){
            hashTable[sorted].push(element)
        } else {
            hashTable[sorted] = [element]
        }
    }

    return Object.values(hashTable);
}

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))







