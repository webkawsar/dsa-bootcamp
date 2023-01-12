// Difficulty Level => Medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters/




// O
function lengthOfLongestSubstring(s) {

    let uniqueSet = new Set();
    let max = 0;
    let i = 0;
    let j = 0;
    
    while (i < s.length) {
        
        if(!uniqueSet.has(s[i])) {

            uniqueSet.add(s[i]);
            i++;
        } else {
            
            uniqueSet.delete(s[j]);
            j++;
        }

        // max = uniqueSet.size > max ? uniqueSet.size : max;
        max = Math.max(max, uniqueSet.size);
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3