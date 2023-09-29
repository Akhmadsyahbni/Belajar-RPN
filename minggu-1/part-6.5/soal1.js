// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 1;
while (i <= 10) {
    console.log(`looping while pertama maju ${i}`);
    i++;
}
console.log('');
let j = 10;
while (j >= 1) {
    console.log(`looping while kedua mundur ${j}`);
    j--
}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('');


for (for1 = 1; for1 <= 10; for1++) {
    console.log(`looping for pertama maju ${for1}`);
}

for (for2 = 10; for2 >= 1; for2--) {
    console.log(`looping for kedua mundur ${for2}`);
}


// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log('');

for (let angka = 1; angka <= 100; angka++) {
    if (angka % 2 == 0) {
        console.log(`angka genap ${angka}`);
    } else {
        console.log(`angka ganjil ${angka}`);
    }
}


//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log('');

for (let counter1 = 1; counter1 <= 100; counter1 += 2) {
    if (counter1 % 3 === 0) {
        console.log(`${counter1}  Kelipatan 3`)
    }
}

for (let counter2 = 1; counter2 <= 100; counter2 += 5) {
    if (counter2 % 6 === 0) {
        console.log(`${counter2}  Kelipatan 6`)
    }
}

for (let counter3 = 1; counter3 <= 100; counter3 += 9) {
    if (counter3 % 10 === 0) {
        console.log(`${counter3}  Kelipatan 10`)
    }
}

console.log('');

let inputan = 5;

for(let a = 0; a < inputan; a++){
    let bintang = '';

    for(let b = 0; b <=a; b++){
        bintang += ' *';
    }
    console.log(bintang);
}

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****