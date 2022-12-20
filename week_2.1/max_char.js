


function maxChar(str) {

    const hashMap = {};
    let max = 0;
    let max_char = '';

    // const max_char = str.split('').map(char => {
    //     if(hashMap.includes(char)) {

    //     }
    // })

    for (let i = 0; i < str.length; i++) {

        const char = str[i];

        // if(char in hashMap) {
        //     hashMap[char] = hashMap[char] + 1
        // } else {
        //     hashMap[char] = 1
        // }

        hashMap[char] = (hashMap[char] || 0) + 1
    }

    for (const key in hashMap) {
        if(hashMap[key] > max) {
            max = hashMap[key]
            max_char = key;
        }
    }
    
    return max;
}

console.log(maxChar('Apple naiiiii deshe'));







