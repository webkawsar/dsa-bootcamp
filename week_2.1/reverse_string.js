

// O(n)
// way 1
function reverseString(str) {

    let modifiedStr = '';
    for (let i = 0; i < str.length; i++) {

        const element = str[i];
        modifiedStr = element + modifiedStr;
    }

    console.log(modifiedStr);
}
reverseString('Hello');



// O(n) + O(n) + O(n) = O(3n) => O(n)
// way 2
function reverseStringWay2(str) {

    let modifiedStr = str.split('').reverse().join('');
    console.log(modifiedStr);
}
reverseStringWay2('syuG olleH');



// O(n)
// way 3
function reverseStringWay3(str) {

    let modifiedStr = '';
    let strLength = str.length;
    for (let i = strLength - 1; i >= 0; i--) {

        const element = str[i];
        modifiedStr += element;
    }
    console.log(modifiedStr);
}
reverseStringWay3('Kam kaj nai, tai DSA Shikhi');


