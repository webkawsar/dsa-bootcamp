

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 55]
// iterative solution
function fibonacci(num) {
    let results = [0, 1];
    for (let i = 2; i <= num; i++) {
        results.push(results[i-1] + results[i-2]);
    }

    console.log(results)
    return results[num];
}

console.log(fibonacci(10));



// recursive solution
function fibonacci2(num) {
    // base case
    if(num <= 2) return 1;
    return fibonacci2(num-1) + fibonacci2(num-2)
}

console.log(fibonacci2(10));