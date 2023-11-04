// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let a = 1;
while (a <= 10){
    console.log(`LOOPING PERTAMA - MAJU ${a} `);
    a++;
}
console.log('')
let b = 10;
while (b>= 1){
    console.log(`LOOPING KEDUA - MUNDUR ${b}`);
    b--;
}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('')
console.log('for')
for(let x = 1; x <= 10; x++){
    console.log(`LOOPING PERTAMA MAJU - ${x}`);
}
for (let y = 10; y >=1; y--){
    console.log(`LOOPING KEDUA - ${y}`);
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

console.log('')
console.log('perulangan ganjil genap');
for (let i = 1; i <=100; i++){
    if(i % 2 == 0){
        console.log(`Angka genap - ${i}`);
    }else{
        console.log(`Angka Ganjil - ${i}`);
    }
}
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
console.log('');
console.log('counter kelipatan');
//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for(j = 1; j <= 100; j +=2){
    if(j % 3 == 0){
        console.log(`${j} kelipatan 3`)
    }
}

for(k = 1; k <= 100; k += 5){
    if(k % 6 == 0){
        console.log(`${k} kelipatan 6`)
    }
}

for (l = 1; l <=100; l += 9){
    if(l % 10 == 0){
        console.log(`${l} kelipatan 10`)
    }
}

console.log('')

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5
for (let m = 1; m <=input; m++){
    let bintang = '';
    for(let n = 1; n <= m; n++){
        bintang += '*';
    }
    console.log(bintang);
}
//hasilnya
//*
//**
//***
//****
//*****