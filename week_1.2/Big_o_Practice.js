// Big O
// Best case (Omega)
// Average case(Theta)
// Worse Case(Big O)



// linear Big(O) = O(n)
// function log(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)    
//     }
// }

// log(10);


// Quadratic Big(O) = O(n^2)
// function log(n) {

//     let count = 0;
//     for (let i = 0; i < n; i++) {
        
//         for (let j = 0; j < n; j++) {
//             count++
//             console.log(j);
//         }
//     }

//     console.log(count)
// }

// log(10);



// O(n) + O(n) = O(2n) = O(n)
// function log(n) {

//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         count++
//     }

//     for (let j = 0; j < n; j++) {
//         count++
//     }

//     console.log(count);
// }

// log(10);




// O(n * n * n) = O(n^3)
// function log(n) {

//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             for (let k = 0; k < n; k++) {
//                 count++;              
//             }
//         }
//     }

//     console.log(count)
// }

// log(10);





// O(n^2 + n) = O(n^2)
// function log(n) {

//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         for (let k = 0; k < n; k++) {
//             count++;           
//         }
//     }

//     for (let j = 0; j < n; j++) {
//         count++;
//     }

//     console.log(count);
// }

// log(10);





// Constant = O(1)
// function addItem(n) {
//     console.log(n + n + n);
// }
// addItem(10);



// Best Case = O(1)
// Worse Case = O(n)

function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i)     
    }
}
logAtLeast5(2)



// Best Case = 
// Worse Case = 
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i)     
    }
}
logAtMost5(8)



// O(m + n)
function log(a, b) {
    for (let i = 0; i < a; i++) {
        console.log(i)        
    }

    for (let j = 0; j < b; j++) {
        console.log(j)        
    }
}

log(3, 5);



