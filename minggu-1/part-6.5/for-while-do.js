// for loop 

// for(start, condition, increment){
//     statement
// }

/* Start diisi dengan kondisi awal dari perulangan. Biasanya kita mendefenisikan sebuah variabel counter yang berfungsi mengontrol perulangan. Sebagai contoh, saya bisa
menulis var i = 1. Variabel i disini berperan sebagai variabel counter.
• Condition biasanya diisi dengan operasi perbandingan, selama operasi ini menghasilkan
nilai true, perulangan akan dijalankan terus. Sebagai contoh jika saya menulis i < 10,
artinya perulangan akan terus dijalankan selama nilai variabel i kurang dari 10.
• Increment diisi dengan instruksi untuk menaikkan nilai variabel counter. Dalam setiap
perulangan, baris ini akan dieksekusi. Sebagai contoh, saya bisa membuat i++, yang
artinya nilai variabel i akan naik 1 angka dalam setiap perulangan */

// Increment
for (let i = 1; i <= 7; i++) {
    console.log("angka ke - ", i);
}

// angka ke = 1 ------------- i = 2
// angka ke = 2 ------------- i = 3 
// angka ke = 3 ------------- i = 4
// angka ke = 4 ------------- i = 5
// angka ke = 5 ------------- i = 6
// angka ke = 6 ------------- i = 7
// angka ke = 7 ------------- i = 8 
// end

// Decrement
for (let j = 7; j >= 0; j--) {
    console.log("angka ke - ", j);
}

// Mencari genap ganjil menggunakan for jika perulangan 1-100,
// jika angka genap maka genap, jika angka ganjil maka ganjil contohnya sperti ini

console.log(' ');

for (let x = 1; x <= 100; x++) {
    if (x % 2 == 0) {
        console.log(`angka ini genap ${x}`);
    } else {
        console.log(`angka ini ganjil ${x}`);
    } 
}


//While inisiasi variabel nya harus di luar beda sama for
x = 1;
while (x <= 10) {
    if (x % 2 == 0)
        console.log("angka ke variabel x - genap ", x);
    else{
        console.log("angka variabel x - ganjil", x)
    }
    x++;
}

console.log('')

z = 1;

do {
    if (z % 2 == 0) {
        console.log("angka ini variabel z - genap ", z);
    } else {
        console.log("angka ini variabel z - ganjil ", z);
    }
    z++;
} while (z <= 100);