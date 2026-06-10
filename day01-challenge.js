// No 1. Box - Hollow
let baris = '';
let n = 5;
for (let i = 0; i < n; i++) {
    let baris = '';

    for (let j = 0; j < n; j++) {

        if (
            i === 0 ||          // baris atas
            i === n - 1 ||      // baris bawah
            j === 0 ||          // kolom kiri
            j === n - 1         // kolom kanan
        ) {
            baris += '* ';
        } else {
            baris += '  ';
        }

    }

    console.log(baris);
}
// --------------------------------------
console.log();
// --------------------------------------

// No 2 Triangle
for (let i = 0; i < n; i++) {
    baris ='*';
    for (let j = 0; j < i; j++) {
        baris += '*';
        
    }
    console.log(baris);
}
// --------------------------------------
console.log();
// --------------------------------------
// No 3 Triangle 02
for (let i = 0; i < 5; i++) {
    baris ='';
    for (let j = n; j > i; j--) {
        baris += '*';
        
    }
    console.log(baris);
}
// --------------------------------------
console.log();
// --------------------------------------
// No. 4 Triangle 03 -> Untuk menampilkan hasil no 4. Beri komen no 1 - 3
for (let i = 1; i <= n; i++) {
  // Cetak spasi
  for (let j = 1; j <= n - i; j++) {
    baris += " ";
  }
  // Cetak bintang
  for (let k = 0; k < i; k++) {
    baris += "*";
  }
  baris += "\n";
}

console.log(baris);
// --------------------
console.log();
// --------------------
// No 5 Triangle 05
for (let i = 0; i < n; i++) {
    let baris = '';

    for (let j = 0; j < n; j++) {
        if (i === j) {
            baris += (i + 1) + ' ';
        } else {
            baris += '* ';
        }
    }

    console.log(baris);
}
// -----------------------------
console.log();
// -----------------------------
// No 6 Triangle 06
let angka = 1;
for (let i = 0; i < n; i++) {
    let baris = '';

    for (let j = 0; j < n; j++) {

        if (j === 0 || i === n - 1) {
            baris += angka + ' ';
            angka++;
        } else {
            baris += '* ';
        }

    }
    console.log(baris);
}
// ---------------------------------
console.log();
// ---------------------------------
// No 7 Triangle 04
for (let i = 0; i < n; i++) {
    let baris = '';

    for (let j = 0; j < n; j++) {
        if (j >= i) {
            baris += '* ';
        } else {
            baris += '  ';
        }
    }

    console.log(baris);
}

