
1. Is Subsequence (leetcode)
https://leetcode.com/problems/is-subsequence/
 


2.Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/
 
3.power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
 
function power(){
 
}
 
4.capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst () {
    // code
  }
 
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 
 5. //nestedEvenSum
  Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
  function nestedEvenSum () {
    // add whatever parameters you deem necessary - good luck!
  }
 
 
  const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
 
  const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
 
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10
 
 6. Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
  const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
 
collectStrings(obj) // ["foo", "bar", "baz"])
 
7. Spiral Matrix
https://leetcode.com/problems/spiral-matrix/