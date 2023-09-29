/* tipeData
ebelumnya kita telah belajar tentang variabel untuk menyimpan nilai. Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. 
Tipe data merupakan pengklasifikasian data berdasarkan jenisnya
*/

//undifined
/* Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, 
variabel tersebut menjadi undefined. Contoh: */
let x;

console.log(typeof(x));

// Numbers

/*Nilai adari numbers adalah angka, jika angka pecahanya desimal maka bisa menggunakan titik di belakang nya
contohnya seperti ini */

let angka = 10;
console.log(typeof(angka));

let angka1 = 10.5;
console.log(typeof(angka1));

console.log('');

//Strings 

/* adalah string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan 
tanda petik satu (‘) atau petik dua (“) di antara teksnya. Contohnya:
Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan tanda petik secara bergantian, 
khususnya jika Anda memiliki teks yang mengandung tanda petik*/

let firstName = "Akhmad";

console.log(firstName);

const question = '"What are you doing with Javascript?"';

console.log(question);

console.log('');

// Boolean 

/* Boolean hanya memiliki dua nilai, yaitu true atau false. Tipe data ini menjadi kunci utama dalam penentuan logika. 
Kita akan banyak menggunakannya nanti dalam materi if/else statement.*/

let benar = true;
let salah = false;

console.log(salah);

let a = 10;
let b = 15;

let perbandingan = a < b;
let perbandingan2 = a > b;
console.log(perbandingan);
console.log(perbandingan2);

console.log('');

// Null 
/* null. Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. Null biasa digunakan sebagai nilai sementara pada variabel, 
tapi sebenarnya nilai tersebut “tidak ada”.*/

let someMaybeData = null;

console.log(someMaybeData);