1.Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 
Your solution MUST have the following complexities:
Time: O(N)
 
Sample Input:
 
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 
219. Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii/
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:
 
Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:
 
Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:
 
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 
442. Find All Duplicates in an Array
https://leetcode.com/problems/find-all-duplicates-in-an-array/
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
 
You must write an algorithm that runs in O(n) time and uses only constant extra space.
 
Example 1:
 
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:
 
Input: nums = [1,1,2]
Output: [1]
Example 3:
 
Input: nums = [1]
Output: []
 
 
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
 
Input: nums = [1,2,3,1]
Output: true
Example 2:
 
Input: nums = [1,2,3,4]
Output: false
Example 3:
 
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
387. First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/
 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 
Example 1:
 
Input: s = "leetcode"
Output: 0
Example 2:
 
Input: s = "loveleetcode"
Output: 2
Example 3:
 
Input: s = "aabb"
Output: -1