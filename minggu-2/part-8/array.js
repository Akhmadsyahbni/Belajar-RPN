/* Array (dalam bahasa indonesia disebut juga sebagai larik) adalah tipe data yang berisi kumpulan
tipe data lain. Jika anda ingin membuat banyak data yang masuk dalam satu kelompok (seperti
kumpulan nama siswa) akan lebih praktis menggunakan array dari pada membuat variabel
tersebut satu per satu.*/

// array lebih bagus kalau diisi hanya satu tipe data, dan satu tujuan.
// Cara mengakses salah satu elemen array itu cukup dengan indexing
let siswa = ["Joko","Abdul","Budi","Jamil","Haris"];

// dan panjang array adalah panjang -1 yang artinya jika panjang 5 maka pasti 4 karena 5 - 1
console.log(siswa[0]); // dan disini mengakses indexingnya 
console.log(siswa); // mengakses langsung keseuluruhan data array

// array 2 dimensi ika element dari array berupa array lain, ini
// Sebuah array tidak hanya bisa diisi dengan tipe primitif saja (number, string, dan boolean), tapi
// juga bisa diisi dengan tipe data yang lebih kompleks, seperti object maupun array lain

let koordinat = [[2,5],[9,5],[3,5]];
console.log(koordinat[0][0]);
console.log(koordinat[0][1]);
console.log(koordinat[1][0]);
console.log(koordinat[1][1][2]); // kalau lebih dari indexing nya maka akan memnampilkan undifined.

let foo = [
    ["Sedang","belajar","Javascript"],
    ["Selamat","Pagi","Dunia"],
    [0,true,false,4.5]
];

console.log(foo[1][1]); // mengakses index array ke berapa, dan tampilakn isi indexing nya 
console.log(foo[2]); // dan ini langsung mengakses index array nya utuh.

console.log('');
console.log("Array 3 dimensi dst");

let myArray = [
    [
        ["Mobil","Motor","Sepeda"],
        [true,false,10,20.5]
    ]
]

console.log(myArray[0][0][0]);
