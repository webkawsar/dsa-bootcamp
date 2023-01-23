
// Step Pattern

// '#  '
// '## '
// '###'

function step(n) {

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < n; column++) {
            
            if(column <= row) {
                level += '#'
            } else {
                level += ' '
            }
        }

        console.log(level);
        
    }

}

step(3)
