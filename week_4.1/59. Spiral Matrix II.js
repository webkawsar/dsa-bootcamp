// Difficulty Level => Medium
// https://leetcode.com/problems/spiral-matrix-ii/

// 4
// [1]  [2]  [3]  [4]
// [12] [13] [14] [5]
// [11] [16] [15] [6]
// [10] [9]  [8]  [7]


// 3
// [1] [2] [3]
// [8] [9] [4]
// [7] [6] [5]

function generateMatrix(n) {

    let results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let counter = 1;

    while (startRow <= endRow && startColumn <= endColumn) {

        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++
        }
        startRow++;

        // right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;          
        }
        endColumn--;

        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;

    }

    console.log(results);
}

console.log(generateMatrix(3))

