// Difficulty Level => Easy
// https://leetcode.com/problems/fizz-buzz/






function fizzBuzz(n) {

    let answer = [];
    for (let i = 1; i <= n; i++) {
        
        
        if((i%3 === 0) && (i%5 === 0)) {
            console.log("FizzBuzz");
        } else if(i%3 === 0) {
            console.log("Fizz");
        } else if(i%5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
        
    }
}

console.log(fizzBuzz(15))



