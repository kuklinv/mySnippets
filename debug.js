/////////////////////////////////////Debugging Challenges

//////////Use Caution When Reinitializing Variables Inside a Loop
//setup
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// my design........................................ not for pride, only for go next task
function zeroArray(m, n) {
    let newArray = new Array(m); // m строк таблицы

    for (let k = 0; k < newArray.length; k++) {
        newArray[k] = new Array(n); // n столбцов
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            newArray[i][j] = 0;
        }
    }

    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/////////////////////////////////////////////////////////////