// 1. 
let matrix = [];
let n = 5;
let counter = 1;
for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = counter++;
    }
}
console.table(matrix);

// 2.
for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        if (j <= i) {
            matrix[i][j] = i + j + 1;
        } else {
            matrix[i][j] = null;
        }
    }
}
console.table(matrix);

// 3. 
for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        if (j < n - i) {
            matrix[i][j] = i + j + 1;
        } else {
            matrix[i][j] = null;
        }
    }
}
console.table(matrix);

// 4.
for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        if (j >= i) {
            matrix[i][j] = j + 1;
        } else {
            matrix[i][j] = null;
        }
    }
}
console.table(matrix);

// 5.
counter = 1;
for(let i = 0; i < n; i++) {

    matrix[i] = []

    for (let j = 0; j < n; j++) {
        if(i===j){
            matrix[i][j] = counter++;
        }else if(i>j){
            matrix[i][j] = 20;
        }else if(i<j){
            matrix[i][j] = 10;
        }

    }
}
console.table(matrix)

// 6.
counter = 5;
for(let i = 0; i < n; i++) {

    matrix[i] = []

    for (let j = 0; j < n; j++) {
        if(i===j){
            matrix[i][j] = counter--;
        }else if(i>j){
            matrix[i][j] = 10;
        }else if(i<j){
            matrix[i][j] = 20;
        }

    }
}
console.table(matrix)

// 7.
function pyramid(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';

        // Turun dari i ke 1
        for (let j = i; j >= 1; j--) {
            row += j + ' ';
        }

        // Naik dari 2 ke i
        for (let j = 2; j <= i; j++) {
            row += j + ' ';
        }

        console.log(row.trim());
    }
}

pyramid(8);

// 9.
function pattern9(n) {
    const size = n;
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            if (i % 2 === 0) {
                matrix[i][j] = n - j;   // baris genap: turun 
            } else {
                matrix[i][j] = j + 1;   // baris ganjil: naik 
            }
        }
    }
    console.table(matrix);
}

pattern9(9);

// 10.
function pattern10(n) {
    
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) {
                matrix[i][j] = '-';             // posisi genap
            } else {
                matrix[i][j] = Math.ceil((j + 1)); // posisi ganjil
            }
        }
    }
    console.table(matrix);
}

pattern10(9);
